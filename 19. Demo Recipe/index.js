const result = document.querySelector(".result");
const btn = document.querySelector(".btn");
const inputEl = document.getElementById("user-input").value;
const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=`;

fetch(url + inputEl)
  .then((res) => res.json())
  .then((data) => {
    let myMeal = data.meals[0];
    const area = data.meals[0].strArea;
    const name = myMeal.strMeal;
    const img = myMeal.strMealThumb;
    const instructions = myMeal.strInstructions;

    let count = 1;
    let ingredients = [];
    console.log(myMeal);
    for (let i in myMeal) {
      let ingredient = "";
      let measure = "";
      if (i.startsWith("strIngredient") && myMeal[i]) {
        // console.log(myMeal[i])
        ingredient = myMeal[i];
        measure = myMeal["strMeasure" + count];
        count += 1;
        ingredients.push(`${measure} ${ingredient}`);
        console.log(ingredient, measure);
      }
    }
    // result.innerHTML= ``
  });
