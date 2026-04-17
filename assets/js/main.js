/* =====================================================
   main.js – Shared utilities across all pages
   ===================================================== */

// ---------- Cursor Glow ----------
(function initCursorGlow() {
  const glow = document.createElement('div');
  glow.className = 'cursor-glow';
  document.body.appendChild(glow);
  let raf;
  let cx = window.innerWidth / 2, cy = window.innerHeight / 2;
  window.addEventListener('mousemove', (e) => {
    cx = e.clientX;
    cy = e.clientY;
    if (!raf) {
      raf = requestAnimationFrame(() => {
        glow.style.left = cx + 'px';
        glow.style.top = cy + 'px';
        raf = null;
      });
    }
  });
})();

// ---------- Sticky Header ----------
(function initHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 30);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// ---------- Active Nav Link ----------
(function initActiveNav() {
  const links = document.querySelectorAll('.nav-link');
  const page = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
})();

// ---------- Mobile Menu ----------
(function initMobileMenu() {
  const toggle = document.getElementById('menu-toggle');
  const close = document.getElementById('menu-close');
  const menu = document.getElementById('mobile-menu');
  if (!toggle || !menu) return;

  const openMenu = () => {
    menu.classList.add('open');
    document.body.style.overflow = 'hidden';
  };
  const closeMenu = () => {
    menu.classList.remove('open');
    document.body.style.overflow = '';
  };

  toggle.addEventListener('click', openMenu);
  if (close) close.addEventListener('click', closeMenu);

  // Close on link click
  menu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close on backdrop click
  menu.addEventListener('click', (e) => {
    if (e.target === menu) closeMenu();
  });
})();

// ---------- Scroll Reveal ----------
(function initScrollReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => obs.observe(el));
})();

// ---------- Marquee (infinite scroll) ----------
(function initMarquees() {
  // Handled via CSS animation on .marquee-track
  // Just ensure enough clones exist
  document.querySelectorAll('.marquee-track').forEach(track => {
    // Items already duplicated in HTML for seamless loop
  });
})();

// ---------- Page Fade In ----------
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('page-fade-in');
});
