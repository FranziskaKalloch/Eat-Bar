let basket = [];

function init() {
  renderBasket();

  let burgerRef = document.getElementById('burgerCards');
  burgerRef.innerHTML = '';

  for (let index = 0; index < burgers.length; index++) {
    const singleBurger = burgers[index];

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
  let clickedItem;

  if (type === 'burger') {
    clickedItem = burgers[index];
  } else {
    clickedItem = pizzas[index];
  }

  let foundItem = basket.find(function (element) {
    return element.name === clickedItem.name;
  });

  if (foundItem == undefined) {
    clickedItem.amount = 1;
    basket.push(clickedItem);
  } else {
    foundItem.amount++;
  }

  renderBasket();
}

function renderBasket() {
  let basketRef = document.getElementById('basketContent');
  basketRef.innerHTML = '';

  if (basket.length === 0) {
    basketRef.innerHTML += `
    <div class="empty-basket-text">
      <p>Nothing here yet.<br>
      Go ahead and choose something delicious!</p>
      <img src="./assets/icon/imbisswagen.png">
    </div> 
    `;
  } else {
    for (let index = 0; index < basket.length; index++) {
      const basketElements = basket[index];

      basketRef.innerHTML += `${getBasketTemplate(basketElements, index)}`;
    }
  }
}

function deleteItem(index) {
  if (basket[index].amount === 1) {
    basket.splice(index, 1);
  } else {
    basket[index].amount--;
  }

  renderBasket();
}

function increaseItem(index) {
  basket[index].amount++;

  renderBasket();
}

function decreaseItem(index) {
  if (basket[index].amount === 1) {
    basket.splice(index, 1);
  } else {
    basket[index].amount--;
  }

  renderBasket();
}

function calculatePrice(index) {
  // Gesamtsumme berechnen
  // hierfür benötige ich den Preis jedes einzelnen Objektes burgers[index].price / pizzas[index].price
  let singleMealPrice = bugers[index].price; // ??? wahrscheinlich muss das anders & es muss auch der Pizza Preis berücksichtig werden

  let sum = singleMealPrice * quantity;

  let subTotal; // Summe aller Artikel
  let deliveryFee = 2.5;

  let totalPrice = subTotal + deliveryFee;
}
