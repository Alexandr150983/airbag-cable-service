function initModal() {
  const modalRefs = {
    openButtons: document.querySelectorAll('[data-modal-open]'),
    closeButton: document.querySelector('[data-modal-close]'),
    modalWindow: document.querySelector('[data-modal]'),
    pageBody: document.body,
  };

  function openModal() {
    modalRefs.modalWindow.classList.remove('is-hidden');
    modalRefs.pageBody.style.overflow = 'hidden';
  }

  function closeModal() {
    modalRefs.modalWindow.classList.add('is-hidden');
    modalRefs.pageBody.style.overflow = 'auto';
  }

  function closeOnBackdropClick(event) {
    if (event.target === modalRefs.modalWindow) {
      closeModal();
    }
  }

  function closeOnEscapeKey(event) {
    if (event.code === 'Escape') {
      closeModal();
    }
  }

  modalRefs.openButtons.forEach(button => {
    button.addEventListener('click', openModal);
  });

  modalRefs.closeButton.addEventListener('click', closeModal);
  modalRefs.modalWindow.addEventListener('click', closeOnBackdropClick);
  window.addEventListener('keydown', closeOnEscapeKey);
}

document.addEventListener('DOMContentLoaded', initModal);
