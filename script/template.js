function getMenuTemplate(meal, index, type) {
  return `
    <div class="single-menu">
                <div class="menu-img">
                  <img src="${meal.img}" alt="${meal.name}" />
                </div>

                <div class="menu-info">
                  <div class="menu-head">
                    <h3>${meal.name}</h3>
                    <p>${meal.price} €</p>
                  </div>

                  <div class="menu-description">
                    <p>${meal.description}</p>
                  </div>

                  <div class="menu-footer">
                    <button class="main-button" onclick="addToBasket('${type}', ${index})">Add to basket</button>
                  </div>
                </div>
              </div>
  `;
}

function getBasketTemplate(basketElements, index) {
  if (basketElements.amount === 1) {
    return `
     <div class="basket-menu-card">
        <div class="basket-menu-description">
          <p>${basketElements.amount}x <strong>${basketElements.name}</strong></p>
          <p>${basketElements.description}</p>
        </div>
        <div class="basket-menu-footer">
          <div class="basket-footer-left-group">
           <button class="delete-btn" onclick="deleteItem(${index})">
              <img src="./assets/icon/delete-black.png" alt="${basketElements.name}" class="delete-icon"/> 
            </button>
            <button class="plus-minus-btn" onclick="increaseItem(${index})">1+</button>
          </div>

         <span>${basketElements.price} €</span>
        </div>
       </div> 
     `;
  } else {
    return `
    <div class="basket-menu-card">
      <div class="basket-menu-header">
         <p>
        ${basketElements.amount}x <strong>${basketElements.name}</strong>
        </p>
        <button class="delete-btn" onclick="deleteItem(${index})">
          <img src="./assets/icon/delete-black.png" alt="NAME" class="delete-icon" />
        </button>
      </div>

      <div class="basket-menu-description">
        <p>${basketElements.description}</p>
      </div>

      <div class="basket-menu-footer">
         <div class="quantity-control">
          <button class="plus-minus-btn" onclick="decreaseItem(${index})">-</button>
          <span>${basketElements.amount}</span>
          <button class="plus-minus-btn" onclick="increaseItem(${index})">+</button>
     </div>

        <span>${basketElements.price}</span>
    </div>
  </div>
    `;
  }
}

/// Veränderte Basket Menu Card
