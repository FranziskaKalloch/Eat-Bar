function init() {
  console.log('Funktion init funktioniert'); // ich teste, ob die Funktion init() funktionert

  let burgerRef = document.getElementById('burgerCards'); // ich hole mir den Container, wo die Menüs abgelegt werden soll und speicher mir das in einer Variablen
  console.log(burgerRef); // ich kontrolliere, was ich mir geholt habe.

  let singleBurger = burgers[0]; // ich hole mir einen Burger aus dem array und zwar den ersten!
  console.log(singleBurger); // ich überprüfe, was ich mir geholt habe

  console.log(singleBurger.name); // ich schaue welche namen der Erste Burger aus dem array hat

  burgerRef.innerHTML += `
    <h3>${singleBurger.name}</h3>
  `; // wie füge ich in das DOM den Burger Namen ein!

  // Jettz das ganze Template, Aber mit nur einem Burger

  burgerRef.innerHTML += `
  
    <div class="single-menu">
                <div class="menu-img">
                  <img src="${singleBurger.img}" alt="Cheese Burger" />
                </div>

                <div class="menu-info">
                  <div class="menu-head">
                    <h3>${singleBurger.name}</h3>
                    <p>${singleBurger.price} €</p>
                  </div>

                  <div class="menu-description">
                    <p>${singleBurger.description}</p>
                  </div>

                  <div class="menu-footer">
                    <button class="main-button">Add to basket</button>
                  </div>
                </div>
              </div>
  `;
}

// Um alle Burger einzufügen wird die Schleife benötigt!
// --> Nächster Schritt:
// Schleife → einzelnes Objekt → console.log

function init() {
  let burgerRef = document.getElementById('burgerCards');

  for (let index = 0; index < burgers.length; index++) {
    const singleBurger = burgers[index];
    console.log(singleBurger.name); // wenn ich nur singleBurger schreibe, wird jeeder burger mit allen anderen Eigenschaften aufgelistet
    // console.log(singleBurger.price); ---> Der Preis von jedem Burger

    // hier kommt noch das Template von oben rein und alle Bilder plus Daten wurden gerendert
  }
}

// Das Template muss in die Schleife geschrieben werden, weil:
// 	•	Die Daten sind immer im Array
//	•	aber du brauchst die Schleife, um jedes Element einzeln zu verarbeiten

// so sieht es dann komplett fertig aus:

function init() {
  let burgerRef = document.getElementById('burgerCards');

  burgerRef.innerHTML = ''; // Container muss vorher geleert werden

  for (let index = 0; index < burgers.length; index++) {
    const singleBurger = burgers[index];
    console.log(singleBurger.name);

    burgerRef.innerHTML += `
  
    <div class="single-menu">
                <div class="menu-img">
                  <img src="${singleBurger.img}" alt="Cheese Burger" />
                </div>

                <div class="menu-info">
                  <div class="menu-head">
                    <h3>${singleBurger.name}</h3>
                    <p>${singleBurger.price} €</p>
                  </div>

                  <div class="menu-description">
                    <p>${singleBurger.description}</p>
                  </div>

                  <div class="menu-footer">
                    <button class="main-button">Add to basket</button>
                  </div>
                </div>
              </div>
  `;
  }
}

// wird jetzt nicht mehr gebraucht, da wir ein template für beides haben:
function templateAUSORTIERT() {
  <div class="single-menu">
    <div class="menu-img">
      <img src="${singlePizza.img}" alt="${singlePizza.name}" />
    </div>

    <div class="menu-info">
      <div class="menu-head">
        <h3>${singlePizza.name}</h3>
        <p>${singlePizza.price} €</p>
      </div>

      <div class="menu-description">
        <p>${singlePizza.description}</p>
      </div>

      <div class="menu-footer">
        <button class="main-button" onclick="addToBasket()">
          Add to basket
        </button>
      </div>
    </div>
  </div>;
}

<button class="main-button" onclick="addToBasket()">
  Add to basket
</button>;

// der Funktion addToBasket muss etwas mitgegeben werden, damit JS weiß, was er in den Basket schiebt, also welches menu

onclick = 'addToBasket(${index})';

// WARENKORB
// 👉 addToBasket soll NUR:
//1. richtiges Objekt holen
//2. in basket pushen
//3. renderBasket() aufrufen

function addToBasket(type, index) {
  if (type == 'burger') {
    basket.push(burgers[index]);
  } else {
    basket.push(pizzas[index]);
  }

  renderBasket();
}



// ## **Warenkorb-Mengenlogik**

//1. Angeclicktes Produkt bestimmen
//2. Im basket prüfen, ob ein Produkt mit gleichem Namen schon existiert
//3. Wenn **nein**:
//    - neues Objekt in den Basket pushen
//    - mit amount: 1
//4. Wenn **ja**:
//    - vorhandenes Objekt finden
//    - amount um 1 erhöhen
//5. Danach renderBasket() aufrufen

// DER BUTTON addToBasket() gibt schon alle Informationen,
// die ich für die Abfrage benötige!
// in der Funktion wird type ="burger" und index="1" ausgegeben
// -----> das ist die Verbindung

// 👉 Button → übergibt Werte → Funktion bekommt sie

// „Ich gehe durch den Basket und prüfe, ob der Name gleich ist“

let clickedItem; // Variable ohne Wert

if (type === "burger") {
  clickedItem = burger[index]; 
}
else {
  clickedItem = pizza[index];
}

//clickedItem ist jetzt ein Objekt:
// ----> mit name, price und description

// Jetzt wird im Basket gesucht, ob es das Item ist, was benötigt wird


basket.find(function(element) {
  return element.name === clickedItem.name;
});

// Das Ergebnis aus dieser Funktion wird noch nicht genutzt
// Das Ergebnis muss erst gespeichert werden!

let foundItem = basket.find(function(element) {
  return element.name === clickedItem.name;
});