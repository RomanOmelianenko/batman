const burgerMenu = () => {
  const burger = document.querySelector('.menu-burger img');
  const menuClose = document.querySelector('.header__menu-close');
  const menuMobile = document.querySelector('.header');

  burger.addEventListener('click', () => {
    menuMobile.style.display = 'block';
  });

  menuClose.addEventListener('click', () => {
    menuMobile.style.display = 'none';
  })
};

burgerMenu();