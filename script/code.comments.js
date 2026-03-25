let basket = []; // Warenkorb, wo später alle ausgewählten Produkte gespeichert werden

function init() {
  let burgerRef = document.getElementById('burgerCards'); // Referenz auf den Burger Container mit HTML holen
  burgerRef.innerHTML = ''; // Container leeren (wichtig, damit nichts doppelt angezeigt wird)

  for (let index = 0; index < burgers.length; index++) {
    // SChleife durch alle Burger im Array
    const singleBurger = burgers[index]; // akutellen Burger aus dem Array holen

    burgerRef.innerHTML += `${getMenuTemplate(singleBurger, index, 'burger')}`; // HTML für jeden Burger erzeugen und in den Container einfügen
  } // wichtig hier: index - Position im Array || singleBurger - aktuelles Objekt (z.B. Cheeseburger)

  let pizzaRef = document.getElementById('pizzaCards');
  pizzaRef.innerHTML = '';

  for (let index = 0; index < pizzas.length; index++) {
    const singlePizza = pizzas[index];

    pizzaRef.innerHTML += `${getMenuTemplate(singlePizza, index, 'pizza')}`;
  }
}

function addToBasket(type, index) {
  let clickedItem; // Variable wird hier vorbereitet -> es wird dann später das angeklickte Produkt hier gespeichert!

  if (type === 'burger') {
    clickedItem = burgers[index];
  } else {
    clickedItem = pizzas[index];
  }
  // Jetzt enthält clickedItem genau das produkt, welches geklickt wurde!

  // basket.find(...) durchsucht den Warenkorb
  // element = jedes einzelne Produkt im Warenkorb
  // einfach jedes einzelne Objekt im basket, das nacheinander geprüft wird.
  let foundItem = basket.find(function (element) {
    return element.name === clickedItem.name;
  });

  if (foundItem == undefined) {
    // // if (foundItem == undefined) 👉 Wenn nichts gefunden wurde → Produkt ist neu
    clickedItem.amount = 1; // Produkt ist neu und wird hinzugefügt - es steht dann eine 1 vor dem Produkt ->> also 1x im Warenkorb
    basket.push(clickedItem); // Produkt wird in den Warenkorb gelegt
  } else {
    foundItem.amount++; // anderseits, wenn das Produkt schon existiert --> Menge erhöhen
  }
  // WICHTIG -> ich füge hiermit nachträglich die Eigeschaft amount zu dem Objekt hinzu

  renderBasket(); // Warenkorb wird gerendert ( UI aktualisierung! )
}

function renderBasket() {
  let basketRef = document.getElementById('basketContent'); // Referenz auf den Warenkorb im HTML
  basketRef.innerHTML = ''; // Container leeren, ansonsten wird alles doppelt angezeigt

  for (let index = 0; index < basket.length; index++) {
    const basketElements = basket[index]; // aktuelles Element holen

    basketRef.innerHTML += `
    <div class="basket-menu-card">
      <div class="basket-menu-description">
        <p>${basketElements.amount}x <strong>${basketElements.name}</strong></p>
        <p>${basketElements.description}</p>
      </div>
      <div class="basket-menu-footer">
        <button onclick="delteItem()"
          <img src="./assets/icon/delete-black.png" alt="${basketElements.name}" />
        </button>
        <span>${basketElements.price} €</span>
      </div>
    </div>
    `;
  }
}

function deleteItem(index) {
  if (basket[index].amount === 1) {
    basket.splice(index, 1);
  } else {
    basket[index].amount--;
  }

  renderBasket(); // wenn sich der Basket ändert, dann merkt das HTML nicht alleine.
  //  renderBasket macht, alten Warenkorb löschen und neuen Warenkorb neu aufbauen.
  // Ohne renderBasket verändern sich die Daten, aber UI bleibt gleich
}

// Was die Funktion machen soll?
// ---> Einfach nur die Menge vom Produkt um 1 erhöhen
// ---> gehe zu basket[index]
// ---> erhöhe amount
function increaseItem(index) {
  basket[index].amount++;

  renderBasket();
}

///

<div class="basket-menu-card">
  <div class="basket-menu-header">
    <p>
      x <strong>Name</strong>
    </p>
    <button class="delete-btn" onclick="deleteItem()">
      <img src="./assets/icon/delete-black.png" alt="NAME" class="delete-icon" />
    </button>
  </div>

  <div class="basket-menu-description">
    <p>Description</p>
  </div>

  <div class="basket-menu-footer">
    <div class="quantity-control">
      <button>-</button>
      <span>Menge</span>
      <button>+</button>
    </div>

    <span>PREIS</span>
  </div>
</div>;

basketRef.innerHTML += `
      <div class="basket-menu-card">
        <div class="basket-menu-header">
          <p>x <strong>Name</strong></p>
          <button class="delete-btn" onclick="deleteItem()">
            <img src="./assets/icon/delete-black.png" alt="NAME" class="delete-icon" />
          </button>
       </div>

       <div class="basket-menu-description">
          <p>Description</p>
       </div>

      <div class="basket-menu-footer">
       <div class="quantity-control">
          <button onclick="decreaseItem(${index})">-</button>
          <span>Menge</span>
          <button onclick="increaseItem(${index})">+</button>
      </div>

        <span>PREIS</span>
      </div>
    </div>;
    `;
