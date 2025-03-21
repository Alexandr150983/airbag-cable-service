document.addEventListener('DOMContentLoaded', () => {
  const openButtons = document.querySelectorAll('[data-modal-open]');
  const closeButton = document.querySelector('[data-modal-close]');
  const modalWindow = document.querySelector('[data-modal]');
  const pageBody = document.body;
  const form = document.getElementById('contactForm');
  const successMessage = document.getElementById('successMessage');
  const loader = document.createElement('p'); // Спінер
  loader.textContent = '⏳ Відправка...';
  loader.style.display = 'none';
  form.appendChild(loader);

  // Відкриття модального вікна
  openButtons.forEach(button => {
    button.addEventListener('click', () => {
      modalWindow.classList.remove('is-hidden');
      pageBody.style.overflow = 'hidden';
    });
  });

  // Закриття модального вікна
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

  // Обробка відправки форми
  form.addEventListener('submit', async event => {
    event.preventDefault();
    loader.style.display = 'block'; // Показати спінер
    successMessage.classList.add('is-hidden'); // Приховати старе повідомлення

    const formData = new FormData(form);
    formData.append('_captcha', 'false');
    formData.append('_template', 'table');
    formData.append('_subject', 'Нове замовлення з сайту');

    form.reset(); // Очищуємо форму відразу після натискання

    try {
      const response = await fetch(
        'https://formsubmit.co/airbag.cable.service@gmail.com',
        {
          method: 'POST',
          body: formData,
        }
      );

      if (response.ok) {
        successMessage.classList.remove('is-hidden');
        setTimeout(() => {
          successMessage.classList.add('is-hidden');
          closeModal();
        }, 5000);
      } else {
        alert('❌ Помилка при відправці, спробуйте ще раз.');
      }
    } catch (error) {
      alert('❌ Виникла проблема. Переконайтеся, що є Інтернет.');
      console.error('Помилка:', error);
    } finally {
      loader.style.display = 'none'; // Приховати спінер
    }
  });
});
