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

const modalTrailer = () => {
  const modalOpen = document.querySelector('.modal');
  const buttonPlay = document.querySelector('.main__button-play');

  buttonPlay.addEventListener('click', () => {
    modalOpen.classList.add('active');
  })

  modalOpen.addEventListener('click', (e) => {
    const isModal = e.target.closest('.modal__inner');

    if (!isModal) {
    modalOpen.classList.remove('active');
    };
  });
};

burgerMenu();
modalTrailer();