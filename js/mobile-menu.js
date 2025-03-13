function initMobileMenu() {
  const menuRefs = {
    mobileMenu: document.querySelector('.js-menu-container'),
    openMenuBtn: document.querySelector('.js-open-menu'),
    closeMenuBtn: document.querySelector('.js-close-menu'),
    menuLinks: document.querySelectorAll('.mobil-nav-link'),
  };

  function toggleMenu() {
    const isMenuOpen =
      menuRefs.openMenuBtn.getAttribute('aria-expanded') === 'true';
    menuRefs.openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    menuRefs.mobileMenu.classList.toggle('is-open');

    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  }

  function closeMenu() {
    menuRefs.mobileMenu.classList.remove('is-open');
    menuRefs.openMenuBtn.setAttribute('aria-expanded', false);
    document.body.style.overflow = 'auto';
  }

  menuRefs.openMenuBtn.addEventListener('click', toggleMenu);
  menuRefs.closeMenuBtn.addEventListener('click', toggleMenu);

  menuRefs.menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  window.matchMedia('(min-width: 768px)').addEventListener('change', event => {
    if (!event.matches) return;
    closeMenu();
  });
}

document.addEventListener('DOMContentLoaded', initMobileMenu);
