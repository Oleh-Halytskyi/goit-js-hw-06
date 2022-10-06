const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector('#ingredients')
console.log(listIngredients);

const addIngredient = (ingredients) => {
  ingredients.forEach(ingredient => {
    const ingredientItem = document.createElement('li');
    ingredientItem.textContent = ingredient;
    ingredientItem.classList.add('item')
    listIngredients.append(ingredientItem)
  })
}

addIngredient(ingredients)
