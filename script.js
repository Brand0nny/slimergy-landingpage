// ── VIDEO CONFIG ──────────────────────────────────────────────
// Opción A: Pega aquí el ID de tu video de YouTube
// Ejemplo: https://youtube.com/watch?v=dQw4w9WgXcQ → ID = 'dQw4w9WgXcQ'
const YOUTUBE_ID = ''; // ← CAMBIA ESTO POR TU ID DE YOUTUBE

// Opción B: Sube demo.mp4 a assets/video/ y deja YOUTUBE_ID vacío
// ─────────────────────────────────────────────────────────────

function loadVideo() {
  const ph = document.getElementById('vidPH');
  if (!ph) return;
  const box = ph.parentElement;
  if (YOUTUBE_ID) {
    box.innerHTML = `<iframe src="https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0&modestbranding=1"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen style="width:100%;height:100%;border:none;display:block;min-height:240px;"></iframe>`;
  } else {
    box.innerHTML = `<video controls autoplay playsinline
      style="width:100%;height:100%;object-fit:cover;min-height:240px;display:block;"
      onerror="this.outerHTML='<div style=\\'display:flex;align-items:center;justify-content:center;height:240px;padding:24px;text-align:center;color:#6A90B2;font-family:Nunito,sans-serif;\\'>Agrega tu video como <code style=\\'color:#52C234;\\'>assets/video/demo.mp4</code><br>o configura YOUTUBE_ID en index.html</div>'">
      <source src="assets/video/demo.mp4" type="video/mp4">
    </video>`;
  }
}

// ── NAVBAR SCROLL ──
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if(nav) nav.classList.toggle('s', scrollY > 60);
});

// ── MOBILE MENU ──
function toggleMob() { 
  const menu = document.getElementById('mobMenu');
  if(menu) menu.classList.toggle('open'); 
}

// ── PARTICLES ──
(function(){
  const c = document.getElementById('ptcl');
  if (!c) return;
  for (let i = 0; i < 22; i++) {
    const d = document.createElement('div');
    d.className = 'dot';
    const size = Math.random() * 2.5 + 1;
    d.style.cssText = `
      left:${Math.random()*100}%;
      width:${size}px; height:${size}px;
      animation-duration:${Math.random()*14+10}s;
      animation-delay:${Math.random()*12}s;
      opacity:${Math.random()*.4+.1};
    `;
    c.appendChild(d);
  }
})();

// ── SCROLL REVEAL ──
const ro = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.12 });
document.querySelectorAll('.rv').forEach(el => ro.observe(el));

// ── COUNTER ANIMATION ──
function animCount(el, target, decimals) {
  const dur = 1400, start = performance.now();
  const run = t => {
    const p = Math.min((t - start) / dur, 1);
    const ease = 1 - Math.pow(1 - p, 3);
    el.textContent = decimals ? (target * ease).toFixed(decimals) : Math.floor(target * ease);
    if (p < 1) requestAnimationFrame(run);
  };
  requestAnimationFrame(run);
}
const co = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const el = e.target;
      animCount(el, parseFloat(el.dataset.t), parseInt(el.dataset.d || 0));
      co.unobserve(el);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('[data-t]').forEach(el => co.observe(el));

// ── HERO CARD LIVE SIMULATION ──
let w = 1240;
const wEl = document.getElementById('heroW');
const cEl = document.getElementById('heroC');

if (wEl || cEl) {
  setInterval(() => {
    w = Math.max(700, Math.min(1900, w + (Math.random() - 0.48) * 45));
    if (wEl) wEl.textContent = Math.round(w).toLocaleString('es-MX');
    if (cEl) {
      const kwh = w * 8 / 1000;
      cEl.textContent = (kwh * 0.884).toFixed(2);
    }
  }, 2000);
}

// ── SMOOTH SCROLL ──
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (href === '#') return;
    const t = document.querySelector(href);
    if (t) { 
      e.preventDefault(); 
      t.scrollIntoView({ behavior: 'smooth' }); 
    }
  });
});