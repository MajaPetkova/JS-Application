window.addEventListener("DOMContentLoaded", () => {
  const userData = JSON.parse(sessionStorage.getItem("userData"));
  if (userData != null) {
      document.querySelector("#addForm .add").disabled = false;
      document.getElementById("guest").style.display = "none";
    } else {
        document.getElementById('user').style.display = 'none';
    }
  document.querySelector(".load").addEventListener("click", loadData);

});
async function loadData() {
  const res = await fetch('http://localhost:3030/data/catches');
  const data=  res.json();
  console.log(data)
}
