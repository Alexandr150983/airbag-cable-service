document.addEventListener('DOMContentLoaded', () => {
  const openButtons = document.querySelectorAll('[data-modal-open]');
  const closeButton = document.querySelector('[data-modal-close]');
  const modalWindow = document.querySelector('[data-modal]');
  const pageBody = document.body;
  const form = document.getElementById('contactForm');
  const successMessage = document.getElementById('successMessage');
  const loaderWrapper = document.querySelector('.loader-wrapper');

  openButtons.forEach(button => {
    button.addEventListener('click', () => {
      modalWindow.classList.remove('is-hidden');
      pageBody.style.overflow = 'hidden';

      loaderWrapper.classList.remove('show-loader');
    });
  });

  const closeModal = () => {
    modalWindow.classList.add('is-hidden');
    pageBody.style.overflow = 'auto';
  };

  closeButton.addEventListener('click', closeModal);
  modalWindow.addEventListener('click', event => {
    if (event.target === modalWindow) closeModal();
  });

  window.addEventListener('keydown', event => {
    if (event.code === 'Escape') closeModal();
  });

  form.addEventListener('submit', async event => {
    event.preventDefault();

    loaderWrapper.classList.add('show-loader');
    successMessage.style.display = 'none';

    const formData = new FormData(form);
    formData.append('_captcha', 'false');
    formData.append('_template', 'table');
    formData.append('_subject', 'Нове замовлення з сайту');

    try {
      const response = await fetch(
        'https://formsubmit.co/airbag.cable.service@gmail.com',
        {
          method: 'POST',
          body: formData,
        }
      );

      if (response.ok) {
        form.reset();
        successMessage.style.display = 'block';
        setTimeout(() => {
          successMessage.style.display = 'none';
          closeModal();
        }, 5000);
      } else {
        alert('❌ Помилка при відправці, спробуйте ще раз.');
      }
    } catch (error) {
      alert('❌ Виникла проблема. Переконайтеся, що є Інтернет.');
      console.error('Помилка:', error);
    } finally {
      loaderWrapper.classList.remove('show-loader');
    }
  });
});
