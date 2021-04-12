function createMenu(item,price,foodClass) {
  const card = document.createElement('div');
  card.classList.add('card', foodClass);

  const food = document.createElement('h5');
  food.textContent = item;

  const cost = document.createElement('h6');
  cost.textContent = price;

  card.appendChild(food);
  card.appendChild(cost);

  return card;
}

const section = () => {
  const menuSect = document.createElement('section');
  menuSect.classList.add('menu-section');

  const salads = document.createElement('div');
  const salad = document.createElement('h3');
  salad.textContent = 'Salads';
  salads.classList.add('title');
  salads.appendChild(salad);

  const entrees = document.createElement('div');
  const entree = document.createElement('h3');
  entree.textContent = 'Entrees';
  entrees.classList.add('title');
  entrees.appendChild(entree);

  const desserts = document.createElement('div');
  const dessert = document.createElement('h3');
  dessert.textContent = 'Desserts';
  desserts.classList.add('title');
  desserts.appendChild(dessert);

  const cardsOne = document.createElement('div');
  cardsOne.classList.add('card-container');
  cardsOne.appendChild(createMenu('Asparagus Salad','$20','asparagus'));
  cardsOne.appendChild(createMenu('Spinich Salad','$20','spinich'));
  const cardsTwo = document.createElement('div');
  cardsTwo.classList.add('card-container');
  cardsTwo.appendChild(createMenu('Filet Mignon','$35','filet-mignon'));
  cardsTwo.appendChild(createMenu('Pork Chops','$25','pork-chops'));
  cardsTwo.appendChild(createMenu('Grilled Chicken','$25','grilled-chicken'));
  cardsTwo.appendChild(createMenu('Burger','$17','burger'));
  const cardsThree = document.createElement('div');
  cardsThree.classList.add('card-container');
  cardsThree.appendChild(createMenu('Ice Cream','$10','ice-cream'));
  cardsThree.appendChild(createMenu('Apple Pie','$15','apple-pie'));

  menuSect.appendChild(salads);
  menuSect.appendChild(cardsOne);
  menuSect.appendChild(entrees);
  menuSect.appendChild(cardsTwo);
  menuSect.appendChild(desserts);
  menuSect.appendChild(cardsThree);

  return menuSect;
}

const menuActive = () => {
  const btns = Array.from(document.querySelectorAll('.btn'));
  btns.forEach((btn) => {
      if (btn.classList.contains('active')) {
        btn.classList.remove('active')
      }
  });
  const menuBtn = document.getElementById('menu');
  menuBtn.classList.add('active');
}

const menu = () => {
  menuActive();
  let sectionAppend = section();
  let sectionRemove = document.querySelector('section');

  const content = document.getElementById('content');
  content.removeChild(sectionRemove);
  content.appendChild(sectionAppend);
}

export default menu;
