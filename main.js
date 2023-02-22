//variables
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cardsContainer = document.querySelector('.cards-container');

//eventos
menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobilepMenu);
menuCarIcon.addEventListener('click', toggleCarAside);

//funciones
function toggleDesktopMenu() {
    aside.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}
function toggleMobilepMenu () {
    mobileMenu.classList.toggle('inactive');
}
function toggleCarAside () {
    desktopMenu.classList.add('inactive');
    aside.classList.toggle('inactive');
}

/*equivalente del array que daria el api rest */
const productList = [];

/* agregamos elementos al array */
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Scoter',
  price: 4200,
  image: 'https://images.pexels.com/photos/159192/vespa-roller-motor-scooter-cult-159192.jpeg?auto=compress&cs=tinysrgb&w=1600',
});
productList.push({
  name: 'Chopper',
  price: 120,
  image: 'https://images.pexels.com/photos/8936917/pexels-photo-8936917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
  name: 'Chopper',
  price: 7000,
  image: 'https://images.pexels.com/photos/163789/sky-road-travel-trip-163789.jpeg?auto=compress&cs=tinysrgb&w=1600',
});
productList.push({
  name: 'GP Bike',
  price: 5500,
  image: 'https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Scoter',
  price: 4200,
  image: 'https://images.pexels.com/photos/159192/vespa-roller-motor-scooter-cult-159192.jpeg?auto=compress&cs=tinysrgb&w=1600',
});
productList.push({
  name: 'Chopper',
  price: 120,
  image: 'https://images.pexels.com/photos/8936917/pexels-photo-8936917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
  name: 'Chopper',
  price: 7000,
  image: 'https://images.pexels.com/photos/163789/sky-road-travel-trip-163789.jpeg?auto=compress&cs=tinysrgb&w=1600',
});
productList.push({
  name: 'GP Bike',
  price: 5500,
  image: 'https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
function renderProducts(arr) {
  for (product of arr) {
    /*captura de componenetes */
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);
    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");
    const productInfoDiv = document.createElement("div");
    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;
    const productName = document.createElement("p");
    productName.innerText = product.name;

    /* maquetacion */
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
    const productInfoFigure = document.createElement("figure");
    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
    productInfoFigure.appendChild(productImgCart);
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
    cardsContainer.appendChild(productCard);
  }
}
renderProducts(productList);




