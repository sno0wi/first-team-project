(() => {
  const refs = {
    openMenulBtn: document.querySelector('[data-menu-open]'),
    closeMenulBtn: document.querySelector('[data-menu-close]'),
    Menu: document.querySelector('[data-menu]'),
  };

  refs.openMenulBtn.addEventListener('click', toggleModal);
  refs.closeMenulBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.Menu.classList.toggle('is-hidden');
  }
})();
