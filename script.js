document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.2 });
  sections.forEach(s => io.observe(s));

  const links = document.querySelectorAll('.menu a');
  function setActive() {
    let idx = sections.length;
    while (--idx && window.scrollY + 150 < sections[idx].offsetTop) {}
    links.forEach(a => a.classList.remove('active'));
    links[idx].classList.add('active');
  }
  setActive();
  window.addEventListener('scroll', setActive);
});
