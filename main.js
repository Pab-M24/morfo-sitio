/* ============================================================
   MORFO | COCINA URBANA PREMIUM — main.js
   ============================================================ */

// === NAVBAR SCROLL ===
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });
}

// === HAMBURGER MENU ===
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

// === TABS DEL MENÚ ===
const tabBtns      = document.querySelectorAll('.tab-btn');
const menuSections = document.querySelectorAll('.menu-section');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.tab;

    tabBtns.forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-selected', 'false');
    });
    menuSections.forEach(s => s.classList.remove('active'));

    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');

    const section = document.getElementById(target);
    if (section) section.classList.add('active');

    // Scroll suave al tope del contenido al cambiar tab en móvil
    if (window.innerWidth < 768) {
      section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// === FADE-IN ON SCROLL (Intersection Observer) ===
const fadeEls = document.querySelectorAll('.fade-in');

if (fadeEls.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  fadeEls.forEach(el => observer.observe(el));
}
