let iconCart = document.querySelector('.cart__icon-shop');
let cartClose = document.querySelector('.cart__close')
let cart = document.querySelector(".cart");
let cartListHTML = document.querySelector('.cart__container')
let cartButtonShop = document.getElementById('cart__button-shop');
let productListHTML = document.querySelector('.shop__items')
let productList = [];
let cartList = [];


/*=================================CART-SHOW===================================*/
iconCart.addEventListener('click', () => {
  cart.classList.add('show__cart');
})

cartClose.addEventListener('click', () => {
  cart.classList.remove('show__cart');
})



const addDataToHtml = () => {
  productListHTML.innerHTML = '';
  
 
    productList.forEach(product => {
      let newProduct = document.createElement('article');
      newProduct.classList.add('card__product');
      newProduct.dataset.id = product.id;
      let originalPrice = parseFloat(product.price.replace('$',''));
      let discountedPrice = (originalPrice * 0.7).toFixed(2);
      newProduct.innerHTML =
        `
          <div class="card__tag">New</div>
          <img src="${product.image}" class="card__img"></img>
          <h3 class="card__title">${product.name}</h3>
          <span class="card__subtitle">${product.category}</span>

          <div class="card__prices">
            <span class="card__price">$${product.price}</span>
            <span class="card__discount">$${discountedPrice}</span>
          </div>

        <a href="#" class="cart__button">
          <i class="bx bx-cart-alt cart__icon"></i>
        </a>
        `
      ;

      productListHTML.appendChild(newProduct);
    });  
}


/*=================================CART-OBSERVER===================================*/
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
      } else {
        entry.target.style.opacity = 0;
      }
    });
  });
  
  const cartCards = document.querySelectorAll('.cart__card');
  
  cartCards.forEach((card) => {
    observer.observe(card);
  });
  
  
const initApp = () => {

  fetch('./assets/js/products.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch product data');
    }
    return response.json();
  })
  .then(data => {
    productList = data;
    addDataToHtml();
  })
  .catch(error => {
    console.error('Error fetching product data:', error);
  });

}

initApp();


