// burgerMenu
const burgerMenu = () => {
  const burger = document.querySelector('.menu-burger img');
  const menuClose = document.querySelector('.header__menu-close');
  const menuMobile = document.querySelector('.header');

  burger.addEventListener('click', openBurger);
  menuClose.addEventListener('click', closeMenuBurger);

  function openBurger() {
    menuMobile.style.display = 'block';
  };

  function closeMenuBurger() {
    menuMobile.style.display = 'none';
  };
};

// modalTrailer
const modalTrailer = () => {
  const modalOpen = document.querySelector('.modal');
  const buttonPlay = document.querySelector('.main__button-play');
  const modalIframeSrc = document.querySelector('.modal__inner iframe');

  buttonPlay.addEventListener('click', openModalTrailer);
  modalOpen.addEventListener('click', closeModalTrailer);

  function openModalTrailer() {
    modalIframeSrc.src = 'https://www.youtube.com/embed/zC6-H-EcEmU';
    modalOpen.classList.add('active');
    window.addEventListener('keydown', closeModalTrailer);
  };

  function closeModalTrailer(e) {
    const isModalTrailer = e.target.closest('.modal__inner');

    if (!isModalTrailer || e.code === "Escape") {
    modalOpen.classList.remove('active');
    modalIframeSrc.src = ' ';
    console.log('click');
    window.removeEventListener('keydown', closeModalTrailer);
    };
  };
};

burgerMenu();
modalTrailer();