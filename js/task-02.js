const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsListEl = document.querySelector('#ingredients');

const makeIngredientsItems = items =>
  items.map(item => {
    const ingredientsItemEl = document.createElement('li');
    ingredientsItemEl.textContent = item;
    ingredientsItemEl.classList.add('item');
    return ingredientsItemEl;
  });

const elements = makeIngredientsItems(ingredients);

ingredientsListEl.append(...elements);
