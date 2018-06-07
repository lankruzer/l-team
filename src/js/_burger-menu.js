let btnBurgerMenu = document.querySelector('.btn-burger-menu');
let burgerMenu = document.querySelector('.burger-menu-list');

btnBurgerMenu.onclick = function() {
  this.classList.toggle('is-active');
  burgerMenu.classList.toggle('is-active');
};
