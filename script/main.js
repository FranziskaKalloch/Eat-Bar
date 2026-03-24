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

function addToBasket(type, index) {
  if (type == 'burger') {
    basket.push(burgers[index]);
  } else {
    basket.push(pizzas[index]);
  }

  renderBasket();
}

function renderBasket() {
  let basketRef = document.getElementById('basketContent');
  basketRef.innerHTML = '';

  for (let index = 0; index < basket.length; index++) {
    const basketElements = basket[index];

    basketRef.innerHTML += `
    <div class="basket-menu-card">
      <div class="basket-menu-description">
        <p>1x <strong>${basketElements.name}</strong></p>
        <p>${basketElements.description}</p>
      </div>
      <div class="basket-menu-footer">
        <img src="./assets/icon/delete-black.png" alt="${basketElements.name}" />
        <span>${basketElements.price} €</span>
      </div>
    </div>
    `;
  }
}
