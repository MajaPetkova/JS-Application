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
    result.innerHTML = `
    <img src="${img}" alt="">
  </div>
  <div class="details">
    <h2>${name}</h2>
    <h4>${area}</h4>
  </div>
  <div class="ingredients-con">
 <ul>
  
  </ul>
  </div>
  <div class="recipe">
    <button id="hide-recipe">X</button>
    <pre class="instructions">${instructions}</pre>
  </div>
  <button class="show-recipe">View Recipe</button>
</div>`;

    let ingredientCon = document.querySelector(".ingredients-con");
    const parentEl = document.createElement("ul");
    let recipe = document.querySelector(".recipe");
    let hideRecipe = document.getElementById("hide-recipe");
    let showRecipe = document.querySelector(".show-recipe");

    ingredients.forEach((x) => {
      let child = document.createElement("li");
      child.innerText = x;
      parentEl.appendChild(child);
      ingredientCon.appendChild(parentEl);
    });
    hideRecipe.addEventListener("click", ()=>{
        recipe.style.display = "none"
    } )
    showRecipe.addEventListener("click", ()=>{
        recipe.style.display = "block"
    })
  });
