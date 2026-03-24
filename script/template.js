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
