//formula bmi => kg/m2
let weight = document.getElementById("weight").value;
let height = document.getElementById("height").value;

function calculateBmi() {
  let bmi = weight / Math.pow(height / 100, 2);
  const heading = (document.querySelector(".heading").innerHTML =
    "Your BMI is:");
  const output = (document.querySelector(".bmi-output").innerHTML =
    bmi.toFixed(2));
  const msg = document.querySelector(".message");

  if (bmi <= 18.5) {
    msg.innerHTML = "You are underweight";
  } else if (bmi > 18.6 && bmi <= 24.9) {
    msg.innerHTML = "You are in healthy range";
  } else if (bmi > 24.9 && bmi <= 29.9) {
    msg.innerHTML = "You are overweight";
  } else if (bmi > 29.9) {
    msg.innerHTML = "You are obese";
  }
}

function clearData() {
  window.location.reload();
}
