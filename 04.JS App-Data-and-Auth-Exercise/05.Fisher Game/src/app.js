window.addEventListener("DOMContentLoaded", () => {
  const userData = JSON.parse(sessionStorage.getItem("userData"));
  if (userData != null) {
    document.getElementById("user").style.display = "none";
    document.querySelector("#addForm .add").disabled = false;
  } else {
    document.getElementById("guest").style.display = "none";
  }
});
