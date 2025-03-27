document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const phoneInput = document.getElementById('user_phone');

  form.addEventListener('submit', event => {
    const phoneValue = phoneInput.value.trim();

    if (!/^\+380\d{9}$/.test(phoneValue)) {
      alert('❌ Введіть правильний номер у форматі +380XXXXXXXXX');
      event.preventDefault();
    }
  });
});
