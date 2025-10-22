// Smooth scroll
document.querySelectorAll('.menu a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offset = 80;
      const topPos = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: topPos, behavior: 'smooth' });
    }
    document.querySelectorAll('.menu a').forEach(a => a.classList.remove('active'));
    this.classList.add('active');
    navLinks.classList.remove('show');
  });
});

// Hamburger
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});