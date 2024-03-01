const openBtn = document.getElementById("openBtn");
openBtn.addEventListener("click", openPopup);

const closeBtn = document.getElementById("closeBtn");
closeBtn.addEventListener("click", closePopup);

const popup = document.getElementById("popup");

function openPopup() {
  popup.classList.add("open");
}
function closePopup(){
    popup.classList.remove("open");
}
