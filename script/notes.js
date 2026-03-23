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
