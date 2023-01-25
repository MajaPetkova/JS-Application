const meals = document.getElementById("meals");

getRandomMeal();

async function getRandomMeal() {
  const res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
  const data = await res.json();
  const randomMeal = data.meals[0];

  addMeal(randomMeal, true);
}

// function getMealById(id) {
//   fetch("http://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id);
// }
// function getMealsBySearch(term) {
//   fetch("http://www.themealdb.com/api/json/v1/1/search.php?s=" + term);
// }

function addMeal(mealData, random = false) {
  console.log(mealData);
  const meal = document.createElement("div");
  meal.classList.add("meal");
  meal.innerHTML = `<div class="meal-header">
   ${random ? ` <span class="random">Random recipe</span>` : ""}
    <img src="${mealData.strMealThumb}" alt="${mealData.Meal}">
</div>
<div class="meal-body">
    <h4></h4>${mealData.strMeal}
    <button class="fav-btn">
        <i class="fa fa-heart"></i>
      </button>
</div>`;
  meals.appendChild(meal);

  meal.querySelector(".meal-body .fav-btn").addEventListener("click", (ev) => {
    if (ev.target.classList.contains("active")) {
      removeMealFromLS(mealData.idMeal);
      ev.target.classList.remove("active");
    } else {
      addMealToLS(mealData.idMeal);
      ev.target.classList.add("active");
    }
  });
}

function addMealToLS(mealId) {
  const mealIds = getMealsFromLS();

  localStorage.setItem("mealIds", JSON.stringify([...mealIds, mealId]));
  // console.log(mealsIds)
}

function removeMealFromLS(mealId) {
  const mealIds = getMealsFromLS();

  localStorage.setItem(
    "mealIds",
    JSON.stringify(mealIds.filter((id) => id !== mealId))
  );
}

function getMealsFromLS() {
  const mealIds = JSON.parse(localStorage.getItem("mealsIds"));
  console.log(mealIds);
  return mealIds == null ? [] : mealIds;
}
