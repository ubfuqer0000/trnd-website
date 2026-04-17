/* =====================================================
   index.js – Hero Mask Reveal Effect
   ===================================================== */

(function initHeroMask() {
  const section = document.getElementById('hero-section');
  const video = document.getElementById('hero-video');
  const canvas = document.getElementById('hero-canvas');
  if (!canvas || !video) return;

  const ctx = canvas.getContext('2d');

  // Resize canvas to match viewport
  function resizeCanvas() {
    canvas.width = section.offsetWidth;
    canvas.height = section.offsetHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Mouse tracking for subtle parallax
  let mouseX = canvas.width / 2;
  let mouseY = canvas.height / 2;
  let targetX = mouseX, targetY = mouseY;
  let currentX = mouseX, currentY = mouseY;

  window.addEventListener('mousemove', (e) => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      targetX = e.clientX;
      targetY = e.clientY;
    }
  });

  // Scroll-based fade
  let scrollProgress = 0;
  window.addEventListener('scroll', () => {
    const rect = section.getBoundingClientRect();
    scrollProgress = Math.max(0, Math.min(1, -rect.top / (rect.height * 0.6)));
  }, { passive: true });

  // Font size responsive
  function getFontSize() {
    const w = canvas.width;
    if (w < 480) return w * 0.15;
    if (w < 768) return w * 0.13;
    return Math.min(w * 0.115, 160);
  }

  let animFrame;

  function draw() {
    animFrame = requestAnimationFrame(draw);

    // Smooth mouse interpolation
    currentX += (targetX - currentX) * 0.07;
    currentY += (targetY - currentY) * 0.07;

    const W = canvas.width;
    const H = canvas.height;
    const alpha = Math.max(0, 1 - scrollProgress * 1.6);

    ctx.clearRect(0, 0, W, H);

    if (alpha <= 0.01) return;

    // Draw video frame
    if (video.readyState >= 2) {
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.drawImage(video, 0, 0, W, H);
      ctx.restore();
    }

    // Subtle parallax offset
    const parallaxX = (currentX / W - 0.5) * 18;
    const parallaxY = (currentY / H - 0.5) * 12;

    // Scale effect on scroll
    const scale = 1 + scrollProgress * 0.15;

    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.translate(W / 2 + parallaxX, H / 2 + parallaxY);
    ctx.scale(scale, scale);

    // --- Mask: Use destination-out to "cut out" the text from dark overlay ---
    // 1. Draw the dark overlay
    ctx.globalCompositeOperation = 'source-over';
    // (overlay was drawn separately in hero-overlay div, but we replicate here for the canvas effect)

    // Use globalCompositeOperation trick:
    // Draw dark background, then cut text out using destination-out, then draw video underneath
    // Since video is already drawn, now we apply the dark overlay with a text hole

    // Step 1: dark overlay rect
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = 'rgba(5, 20, 43, ' + (alpha * 0.92) + ')';
    ctx.fillRect(-W, -H, W * 2, H * 2);

    // Step 2: Cut out text (punch a hole)
    ctx.globalCompositeOperation = 'destination-out';
    ctx.font = `900 ${getFontSize()}px Objektiv, Montserrat, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = 'rgba(0,0,0,1)';
    ctx.fillText('SHAPE IT ALL!', 0, 0);

    ctx.restore();
  }

  // Start video & draw loop
  video.addEventListener('canplay', () => {
    video.play().catch(() => {});
    draw();
  });

  // If video already loaded
  if (video.readyState >= 2) {
    video.play().catch(() => {});
    draw();
  }

  // ---------- Scroll indicator hide ----------
  const scrollIndicator = document.getElementById('hero-scroll-indicator');
  window.addEventListener('scroll', () => {
    if (scrollIndicator) {
      scrollIndicator.style.opacity = window.scrollY > 80 ? '0' : '1';
    }
  }, { passive: true });

})();
