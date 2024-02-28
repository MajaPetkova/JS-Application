const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=`;

let imgBox = document.querySelector(".imgBox");
let qrImage = document.getElementById("qrImage");
let qrInput = document.getElementById("qrInput").value;
let btn = document.querySelector("button");

btn.addEventListener("click", generateQR);

function generateQR() {
    if(qrInput.length > 0){
        qrImage.src = url + qrInput;
        imgBox.classList.add("showImg")
    }
}
