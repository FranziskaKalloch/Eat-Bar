function init() {
  console.log('Funktion init funktioniert');

  let burgerRef = document.getElementById('burgerCards');
  console.log(burgerRef);

  let singleBurger = burgers[0];
  console.log(singleBurger);

  console.log(singleBurger.name);

  burgerRef.innerHTML += `
  
    <div class="single-menu">
                <div class="menu-img">
                  <img src="${singleBurger.img}" alt="Cheese Burger" />
                </div>

                <div class="menu-info">
                  <div class="menu-head">
                    <h3>${singleBurger.name}</h3>
                    <p>${singleBurger.price}</p>
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
