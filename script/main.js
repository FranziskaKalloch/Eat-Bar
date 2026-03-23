function init() {
  let burgerRef = document.getElementById('burgerCards');
  burgerRef.innerHTML = '';

  for (let index = 0; index < burgers.length; index++) {
    const singleBurger = burgers[index];
    console.log(singleBurger.name);

    burgerRef.innerHTML += `
  
    <div class="single-menu">
                <div class="menu-img">
                  <img src="${singleBurger.img}" alt="${singleBurger.name}" />
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

  let pizzaRef = document.getElementById('pizzaCards');
  pizzaRef.innerHTML = '';

  for (let index = 0; index < pizzas.length; index++) {
    const singlePizza = pizzas[index];

    pizzaRef.innerHTML += `
        <div class="single-menu">
                <div class="menu-img">
                  <img src="${singlePizza.img}" alt="${singlePizza.name}" />
                </div>

                <div class="menu-info">
                  <div class="menu-head">
                    <h3>${singlePizza.name}</h3>
                    <p>${singlePizza.price}</p>
                  </div>

                  <div class="menu-description">
                    <p>${singlePizza.description}</p>
                  </div>

                  <div class="menu-footer">
                    <button class="main-button">Add to basket</button>
                  </div>
                </div>
              </div>
    
    
    `;
  }
}
