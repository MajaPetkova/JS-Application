const passwordBox = document.getElementById("password");
const btn= document.querySelector(".container button");
const icon= document.getElementById("icon")

const length = 10;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "@#$%^&*()_+|}{<>/-[]";

const allChars = upperCase + lowerCase + number + symbols;

function generatePassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];
//   console.log(password); 

  while (length > password.length) {
    password+=allChars[Math.floor(Math.random() * allChars.length)]
  }
  passwordBox.value = password
}

btn.addEventListener("click",generatePassword )

function copyPassword(){
passwordBox.select();
document.execCommand("copy")
}
icon.addEventListener("click", copyPassword)

