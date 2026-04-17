/* =====================================================
   portfolio.js – Lightbox & Filter Logic
   ===================================================== */

(function initPortfolio() {

  const lightbox        = document.getElementById('lightbox');
  const lbMedia         = document.getElementById('lightbox-media');
  const lbTitle         = document.getElementById('lightbox-title');
  const lbCaption       = document.getElementById('lightbox-caption');
  const lbClose         = document.getElementById('lightbox-close');
  const lbPrev          = document.getElementById('lightbox-prev');
  const lbNext          = document.getElementById('lightbox-next');
  const filterBtns      = document.querySelectorAll('[data-filter]');
  const items           = Array.from(document.querySelectorAll('.portfolio-item'));

  if (!lightbox) return;

  let currentIndex = 0;
  let visible = items;

  // ---- Open Lightbox ----
  function openLightbox(index) {
    currentIndex = index;
    const item = visible[index];
    if (!item) return;

    const src     = item.dataset.src     || item.querySelector('img')?.src || '';
    const type    = item.dataset.type    || 'image';
    const title   = item.dataset.title   || '';
    const caption = item.dataset.caption || '';

    // Replace old media node
    const oldMedia = document.getElementById('lightbox-media');
    let newMedia;
    if (type === 'video') {
      newMedia = document.createElement('video');
      newMedia.id = 'lightbox-media';
      newMedia.src = src;
      newMedia.controls = true;
      newMedia.autoplay = true;
      newMedia.className = 'w-full max-h-[70vh] object-contain rounded-xl shadow-2xl';
    } else {
      newMedia = document.createElement('img');
      newMedia.id = 'lightbox-media';
      newMedia.src = src;
      newMedia.alt = title;
      newMedia.className = 'w-full max-h-[70vh] object-contain rounded-xl shadow-2xl';
    }
    oldMedia.replaceWith(newMedia);

    lbTitle.textContent   = title;
    lbCaption.textContent = caption;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  // ---- Close Lightbox ----
  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
    // Pause video if any
    const vid = lightbox.querySelector('video');
    if (vid) vid.pause();
  }

  // ---- Navigate ----
  function goNext() {
    currentIndex = (currentIndex + 1) % visible.length;
    openLightbox(currentIndex);
  }
  function goPrev() {
    currentIndex = (currentIndex - 1 + visible.length) % visible.length;
    openLightbox(currentIndex);
  }

  // ---- Events ----
  items.forEach((item, idx) => {
    item.addEventListener('click', () => {
      visible = getVisible();
      const visIdx = visible.indexOf(item);
      openLightbox(visIdx >= 0 ? visIdx : 0);
    });
  });

  if (lbClose) lbClose.addEventListener('click', closeLightbox);
  if (lbNext)  lbNext.addEventListener('click', goNext);
  if (lbPrev)  lbPrev.addEventListener('click', goPrev);

  // Click outside to close
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target.id === 'lightbox-bg') closeLightbox();
  });

  // Keyboard
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape')      closeLightbox();
    if (e.key === 'ArrowRight')  goNext();
    if (e.key === 'ArrowLeft')   goPrev();
  });

  // ---- Filter ----
  function getVisible() {
    return items.filter(item => item.style.display !== 'none');
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active-filter'));
      btn.classList.add('active-filter');

      const filter = btn.dataset.filter;
      items.forEach(item => {
        if (filter === 'all' || item.dataset.category === filter) {
          item.style.display = '';
          item.style.opacity = '0';
          item.style.transform = 'scale(0.95)';
          requestAnimationFrame(() => {
            item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          });
        } else {
          item.style.display = 'none';
        }
      });
      visible = getVisible();
    });
  });

})();
