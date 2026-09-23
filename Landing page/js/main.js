document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('active');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const currentPage = window.location.pathname.split('/').pop();
  const navItems = document.querySelectorAll('.nav-links a');

  navItems.forEach((link) => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
      link.classList.add('active');
    }
  });

  const contactForm = document.querySelector('#contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const name = document.querySelector('#name')?.value.trim();
      const email = document.querySelector('#email')?.value.trim();
      const message = document.querySelector('#message')?.value.trim();

      if (!name || !email || !message) {
        alert('Por favor, completa todos los campos antes de enviar el mensaje.');
        return;
      }

      alert(`Gracias ${name}, tu mensaje ha sido enviado con éxito. Pronto te responderemos.`);
      contactForm.reset();
    });
  }

  const yearElement = document.querySelector('#current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
