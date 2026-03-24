let basket = [];

function init() {
  let burgerRef = document.getElementById('burgerCards');
  burgerRef.innerHTML = '';

  for (let index = 0; index < burgers.length; index++) {
    const singleBurger = burgers[index];
    console.log(singleBurger.name);

    burgerRef.innerHTML += `${getMenuTemplate(singleBurger, index, 'burger')}`;
  }

  let pizzaRef = document.getElementById('pizzaCards');
  pizzaRef.innerHTML = '';

  for (let index = 0; index < pizzas.length; index++) {
    const singlePizza = pizzas[index];

    pizzaRef.innerHTML += `${getMenuTemplate(singlePizza, index, 'pizza')}`;
  }
}

function addToBasket(type, index) {}
