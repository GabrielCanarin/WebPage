// Water effect para o site todo
const waterBg = document.querySelector('.water-bg');
let timeout;

document.body.addEventListener('mousemove', (e) => {
  clearTimeout(timeout);

  const x = (e.clientX / window.innerWidth) * 100;
  const y = (e.clientY / window.innerHeight) * 100;

  waterBg.style.setProperty('--x', `${x}%`);
  waterBg.style.setProperty('--y', `${y}%`);
  waterBg.style.opacity = '1';

  // esconde após um tempo parado
  timeout = setTimeout(() => {
    waterBg.style.opacity = '0';
  }, 500);
});

// Smooth scrolling para navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Fade in animation ao scrollar
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
  observer.observe(el);
});

// Header com fundo ao scrollar
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 100) {
    header.style.background = 'rgba(10, 10, 15, 0.98)';
  } else {
    header.style.background = 'rgba(10, 10, 15, 0.95)';
  }
});
