const animal_result = document.getElementById("animal_result");
const dog_result = document.getElementById("dog_result");
const animal_btn = document.getElementById("animal_btn");
const dog_btn = document.getElementById("dog_btn");

animal_btn.addEventListener("click", getRandomAnimal);
dog_btn.addEventListener("click", getRandomDog);

function getRandomAnimal() {
  fetch('https://zoo-animal-api.herokuapp.com/animals/rand')
    .then((res) => res.json())
    .then((data) => {
        console.log(data.image_link)
        animal_result.innerHTML = `<img src="${data.image_link}"/>`;
        // cat_result.innerHTML = `<p>${data.name}</p>`;
    })
    .catch((err) => {
      console.log(err);
    });
}
function getRandomDog() {
  fetch("https://random.dog/woof.json")
    .then((res) => res.json())
    .then((data) => {
      if (data.url.includes(".mp4")) {
        getRandomDog();
      } else {
        dog_result.innerHTML = `<img src="${data.url}"/>`;
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
