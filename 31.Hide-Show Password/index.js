let eyeIcon = document.getElementById("icon");
let password = document.getElementById("password");

eyeIcon.addEventListener("click", () => {
  if (password.type == "text") {
    password.type = "password";
    eyeIcon.src = "eye-close.png";
  } else {
    password.type = "text ";
    eyeIcon.src = "eye-open.png";
  }
});
