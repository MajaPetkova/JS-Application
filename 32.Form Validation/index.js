let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let msgError = document.getElementById("msg-error");
let submitError = document.getElementById("submit-error");

function validateName() {
  let name = document.getElementById("contact-name").value;
  if (name.length == 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Write full name";
    return false;
  }
  nameError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  return true;
}

function validatePhone() {
  let phoneNum = document.getElementById("phoneNum").value;
  if (phoneNum.length == 0) {
    phoneError.innerHTML = "Phone number is required";
    return false;
  }
  if (phoneNum.length !== 10) {
    phoneError.innerHTML = "Phone should be at least 10 digits";
    return false;
  }
  if (!phoneNum.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = "Only digits";
    return false;
  }
  phoneError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  return true;
}
function validateEmail() {
  let email = document.getElementById("email").value;
  if (email.length == 0) {
    emailError.innerHTML = "Email is required";
    return false;
  }
  if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
    emailError.innerHTML = "Email invalid";
    return false;
  }
  emailError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  return true;
}
function validateMessage() {
  let message = document.getElementById("message").value;
  let required = 30;
  let left = required - message.length;

  if (left > 0) {
    msgError.innerHTML = left + " more characters required";
    return false;
  }
  msgError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  return true;
}
function validateForm() {
  if (
    !validateEmail() ||
    !validateName() ||
    !validateMessage() ||
    !validatePhone()
  ) {
    submitError.style.display = "block";
    submitError.innerHTML = "Please fix error to submit";
    setTimeout(function(){
        submitError.style.display = "none";
    },2000)
    return false;
  }
}
