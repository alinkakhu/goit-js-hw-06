const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
let ul = document.getElementById('ingredients')
let listofIngridients = ingredients.map((item) => {

  let li = document.createElement('li');
  li.textContent = item;
  li.classList.add('item');
  return li
  
})
ul.append(...listofIngridients)
