l





/*=================================CART===================================*/
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
  