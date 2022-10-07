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

const allEl = ingredients.map(ingredient => {
    const ingredientItem = document.createElement('li');
    ingredientItem.textContent = ingredient;
    ingredientItem.classList.add('item')
    return ingredientItem
  }) 
 
listIngredients.append(...allEl)

