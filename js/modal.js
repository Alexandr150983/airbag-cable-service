(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', openModal);
  refs.closeModalBtn.addEventListener('click', closeModal);
  refs.modal.addEventListener('click', backdropClick);
  window.addEventListener('keydown', onEscKeyPress);

  function openModal() {
    refs.modal.classList.remove('is-hidden');
    refs.body.style.overflow = 'hidden';
  }

  function closeModal() {
    refs.modal.classList.add('is-hidden');
    refs.body.style.overflow = 'auto';
  }

  function backdropClick(event) {
    if (event.target === refs.modal) {
      closeModal();
    }
  }

  function onEscKeyPress(event) {
    if (event.code === 'Escape') {
      closeModal();
    }
  }
})();
