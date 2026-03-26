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
  counter();
}

function renderBasket() {
  let basketRef = document.getElementById('basketContent');
  let basketOverlay = document.getElementById('basketContentMobile'); ///
  let sumSectionRef = document.getElementById('sumSection');
  let basketCss = document.querySelector('.basket');

  basketRef.innerHTML = '';

  if (basket.length === 0) {
    basketRef.innerHTML += `
        ${emptyBasketHtml()}
    `;

    sumSectionRef.style.display = 'none';
    basketCss.style.justifyContent = 'space-evenly';
  } else {
    for (let index = 0; index < basket.length; index++) {
      const basketElements = basket[index];

      basketRef.innerHTML += `${getBasketTemplate(basketElements, index)}`;

      basketOverlay.innerHTML += `
       ${getBasketTemplate(basketElements, index)}
    `;
    }

    sumSectionRef.style.display = 'flex';
    basketCss.style.justifyContent = 'space-between';
  }

  calculatePrice();
}

function deleteItem(index) {
  basket.splice(index, 1);

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

function calculatePrice() {
  let subTotal = 0;

  basket.forEach((element) => {
    subTotal += element.price * element.amount;
  });

  let deliveryFee = 2.5;
  let totalPrice = subTotal + deliveryFee;

  document.getElementById('subTotal').innerText = `${subTotal.toFixed(2)} €`;
  document.getElementById('deliveryFee').innerText = ` ${deliveryFee.toFixed(2.0)} €`;
  document.getElementById('totalPrice').innerText = `${totalPrice.toFixed(2)} €`;
  document.getElementById('buyButton').innerText = `Buy Now (${totalPrice.toFixed(0)}) €`;

  document.getElementById('subTotalMobile').innerText = `${subTotal.toFixed(2)} €`;
  document.getElementById('deliveryFeeMobile').innerText = ` ${deliveryFee.toFixed(2.0)} €`;
  document.getElementById('totalPriceMobile').innerText = `${totalPrice.toFixed(2)} €`;
  document.getElementById('buyButtonMobile').innerText = `Buy Now (${totalPrice.toFixed(0)}) €`;
}

function openDialog() {
  let dialog = document.getElementById('orderDialog');
  dialog.showModal();
}

function closeDialog() {
  let dialog = document.getElementById('orderDialog');
  dialog.close();
}

function openBasketOverlay() {
  document.getElementById('basketOverlay').classList.remove('d-none');
}

function closeBasketOverlay() {
  document.getElementById('basketOverlay').classList.add('d-none');
}

function counter() {
  let count = 0;

  let counterRef = document.getElementById('basketCount');

  for (let index = 0; index < basket.length; index++) {
    const amount = basket[index].amount; // Hier werden nur Strings aneinander gehängt
    count = count + amount;
  }
  counterRef.innerText = count;
}
