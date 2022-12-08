const host = "http://localhost:3030/";

async function request(url, options) {
  try {
    const res = await fetch(host + url, options);
    if (res.ok != true) {
      if (res.status == 403) {
        sessionStorage.removeItem("userData");
      } else {
        const error = await res.json();
        throw new Error(error.message);
      }
    }
    if (res.status == 204) {
      return res;
    } else {
      return res.json();
    }
  } catch (err) {
    alert(err.message);
    throw err;
  }
}
function createOptions(method, data) {
  const options = {
    method,
    headers: {},
  };
  if (data != undefined) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(data);
  }
  const userData = JSON.parse(sessionStorage.getItem("userData")).token;
  if (userData != null) {
    options.headers["X-Authorization"] = userData.token;
  }
  return options;
}

export async function get(url) {
  return request(url, createOptions());
}

export async function post(url, data) {
  return request(url, options("post", data));
}

export async function put(url, data) {
  return request(url, options("put", data));
}

export async function del(url) {
  return request(url, options("delete"));
}
