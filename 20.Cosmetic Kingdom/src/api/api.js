import { clearUserData, getUserData, setUserData } from "../util.js";

const hostName = "http://localhost:3030";

async function request(url, options) {
  try {
    const res = await fetch(hostName + url, options);

    if (res.ok != true) {
      const error = await res.json();
      throw new Error(error.message);
    }

    // try {
    //   return res.json();
    // } catch (err) {
    //   return res;
    // }
    if (res.status == 204) {
      return res;
    } else {
      return  res.json();
    }
  } catch (err) {
    alert(err.message);
    throw err;
  }
}
function createOptions(method = "get", data) {
  const options = {
    method,
    headers: {},
  };

  if (data != undefined) {
    (options.headers["Content-Type"] = "application/json"),
      (options.body = JSON.stringify(data));
  }
  const userData = getUserData();
  if (userData) {
    options.headers["X-Authorization"] = userData.token;
  }

  return options;
}
export function get(url) {
  return request(url, createOptions());
}
export function post(url, data) {
  return request(url, createOptions("post", data));
}
export function put(url, data) {
  return request(url, createOptions("put", data));
}
export function del(url) {
  return request(url, createOptions("delete"));
}

export async function login(email, password) {
  const result = await post("/users/login", { email, password });

  const userData = {
    email: result.email,
    id: result._id,
    token: result.accessToken,
  };
  setUserData(userData);
  return result;
}
export async function register(email, password) {
  const result = await post("/users/register", { email, password });

  const userData = {
    email: result.email,
    id: result._id,
    token: result.accessToken,
  };
  setUserData(userData);
  return result;
}
export async function logout() {
  await get("/users/logout");
  clearUserData();
}
