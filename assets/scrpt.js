// Background color change on index.html
document.addEventListener('DOMContentLoaded', () => {
  const colorBtn = document.getElementById('colorBtn');
  if (colorBtn) {
    colorBtn.addEventListener('click', () => {
      document.body.style.backgroundColor =
        '#' + Math.floor(Math.random() * 16777215).toString(16);
    });
  }

  // Simple contact form handler
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      document.getElementById('formMessage').textContent =
        '✅ Thank you! Your message has been received.';
      contactForm.reset();
    });
  }
});
