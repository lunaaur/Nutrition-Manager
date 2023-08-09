const section = document.querySelector('.plan-controls');
const btn = document.querySelector('#find');
const caloriesInput = document.getElementById('calories-input');

const planContainer = document.querySelector('.plan-container');
const mainContainer = document.querySelector('.main-container');
const btnIngredient = document.getElementById('ingredient-btn');
const ingredientInput = document.getElementById('ingredient-input');
const select = document.getElementById('select');

const excludeInput = document.getElementById('exclude-input');
const card = document.querySelector('#card-body');
const dishesDiv = document.querySelector('.dishes');

//* удалить рецепт
card?.addEventListener('click', async (e) => {
  const { id } = e.target;
  if (e.target.tagName === 'BUTTON' && e.target.innerHTML == 'Delete') {
    const response = await fetch(`/journal/${e.target.id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });
    console.log((response));
    if (response.status === 200) {
      dishesDiv.removeChild(e.target.parentNode);
    }
  }
});

//* находим рецепту по ингредиенту
const recipeBlock = document.createElement('div');
btnIngredient?.addEventListener('click', async (e) => {
  e.preventDefault();
  const ingredient = ingredientInput.value;
  const response = await fetch(`https://api.spoonacular.com/recipes/search?apiKey=e7d437b64d39421db8fdb01da594e79c&ingrediets=${ingredient}&number=12`);
  const result = await response.json();
  const recipes = result.results;
  console.log(recipes);

  recipeBlock.classList.add('recipe-block');
  const newBlock = recipes.map((recipe) => (
  `<div className="card-body" id="card-body">
          <div className="card-area">
            <h5 className="card-title">${recipe.title}</h5>
          </div>
          <p className="card-text">
            Preparation time:
            ${recipe.readyInMinutes}
            min
          </p>
          <p className="card-text">
            Servings:
            ${recipe.servings}
          </p>
          <a href=${recipe.sourceUrl} class="btn btn-primary">Go to recipe</a>
        </div>
        `))
  recipeBlock.innerHTML = newBlock.join('');
  recipeBlock.innerHTML += `
  <div class="recipes-block" id="recipe-card">
    <div class="card" id="card-id">
    `;
  mainContainer.append(recipeBlock);
});

// * получаем meal plan
const planBlock = document.createElement('div');
btn?.addEventListener('click', async (e) => {
  e.preventDefault();
  const calories = caloriesInput.value;
  const diet = select.value;
  const exclude = excludeInput.value;
  const response = await fetch(`https://api.spoonacular.com/mealplanner/generate?apiKey=e7d437b64d39421db8fdb01da594e79c&timeFrame=day&targetCalories=${calories}&diet=${diet}&exclude=${exclude}`);
  const result = await response.json();
  console.log(result);
  if (result) {
    const { meals } = result;
    planBlock.classList.add('plan-block');
    // * test
    /*  planBlock.innerHTML =`
    <div class="recipes-block" id="recipe-card">
    <div class="card-1">
    <div className="card-body" >
          <div className="card-area">
            <h5 className="card-title">title</h5>
          </div>
          <p className="card-text">
            Preparation time:
            min
          </p>
          <p className="card-text">
            Servings:
          </p>
          <a href="#" class="btn btn-primary">Go to recipe</a>
          <button type="submit" class="btn btn-primary" id="save">Save</button>
        </div>
    ` */
    // !!

    const newBlock = meals.map((meal) => (
      `<div className="card-body" id="card-body">
        <div className="card-area">
          <h5 className="card-title">${meal.title}</h5>
        </div>
        <p className="card-text">
          Preparation time:
          ${meal.readyInMinutes}
          min
        </p>
        <p className="card-text">
          Servings:
          ${meal.servings}
        </p>
        <a href=${meal.sourceUrl} class="btn btn-primary">Go to recipe</a>
      </div>
      `))
    planBlock.innerHTML = newBlock.join('');
    planBlock.innerHTML += `
      <div className="nutrition-info">
      <div className="card-body" id="nutrition-body">
      <h5 className="card-title">Nutrition</h5>
      <p className="card-text">
      Calories:
      ${result.nutrients.calories.toFixed(0)}
      </p>
      <p className="card-text">
      Carbohydrates:
      ${result.nutrients.carbohydrates.toFixed(0)}
      </p>
      <p className="card-text">
      Fat:
      ${result.nutrients.fat.toFixed(0)}
      </p>
      <p className="card-text">
      Protein:
      ${result.nutrients.protein.toFixed(0)}
      </p>
      </div>
      </div>`; 
    planContainer.append(planBlock);
  }
});

/**/

//* говорящая груша
const blockquote = document.querySelector('.blockquote-1')
const pear = document.querySelector('.pear');
pear?.addEventListener('click', async (e) => {
  e.preventDefault();
  const response = await fetch('https://api.spoonacular.com/food/jokes/random?apiKey=e7d437b64d39421db8fdb01da594e79c');
  const result = await response.json();
  console.log(result);
  blockquote.innerText = `${result.text}`
 /*  const jokeDiv = document.createElement('div')
  jokeDiv.classList.add('joke-block');
  jokeDiv.innerHTML = `
  <blockquote class="blockquote-1">
    <p>${result.text}</p>
</blockquote>
  `
  pear.append(jokeDiv) */
});


//* вопрос боту
const askBtn = document.getElementById('ask-btn')

const answerBlock = document.createElement('div')
const botInput = document.getElementById('bot-input')
askBtn?.addEventListener('click', async (e) => {
  e.preventDefault();
  const response = await fetch(`https://api.spoonacular.com/recipes/quickAnswer?q=${botInput.value}&apiKey=e7d437b64d39421db8fdb01da594e79c`);
  const result = await response.json();
  console.log(result);

  answerBlock.classList.add('answerBlock')
  answerBlock.innerHTML = `
  <div class="recipes-block" id="recipe-card">
  <div class="card-answer">
  <div className="card-body" id="card-body">
        <p className="card-text answer">
          ${result.answer}
        </p>
      </div>
  `
  mainContainer.append(answerBlock)
})