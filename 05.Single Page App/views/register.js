import { register } from "../api/data.js";


const section = document.getElementById("registerSection");
section.remove();
const form = section.querySelector("form");
form.addEventListener("submit", onSubmit);
let ctx = null;

export function showRegisterPage(ctxTarget) {
  ctx = ctxTarget;
  ctx.showSection(section);
}
async function onSubmit(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const email = formData.get("email").trim();
  const password = formData.get("password").trim();
  const repass = formData.get("repass").trim();
  if (password != repass) {
    alert("Passwords don't match");
    return;
  }
  if (email == "" || password == "" || repass == "") {
    return;
  }
  await register(email, password);
  // try {
  //   const res = await fetch("http://localhost:3030/users/register", {
  //     method: "post",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ email, password }),
  //   });
  //   if (res.ok != true) {
  //     const error = await res.json();
  //     throw new Error(error.message);
  //   }
  //   const data = await res.json();
  //   const userData={
  //       username: data.username,
  //       id: data._id,
  //       token: data.accessToken
  //   }
  //   sessionStorage.setItem('userData', JSON.stringify(userData));
  ctx.updateUserNav();
  ctx.goto("home");
  // } catch (err) {
  //   alert(err.message);
  // }
}
