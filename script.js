window.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('nav .menu a');
  const current = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(link => {
    if (link.getAttribute('href') === current) {
      link.classList.add('active');
    }
  });
});
