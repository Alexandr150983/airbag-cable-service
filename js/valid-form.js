document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const phoneInput = document.getElementById('user_phone');

  form.addEventListener('submit', event => {
    const phoneValue = phoneInput.value.trim();

    // Перевіряємо, чи номер починається з +380 і має 12 символів
    if (!/^\+380\d{9}$/.test(phoneValue)) {
      alert('❌ Введіть правильний номер у форматі +380XXXXXXXXX');
      event.preventDefault(); // Зупиняємо відправку форми
    }
  });
});
