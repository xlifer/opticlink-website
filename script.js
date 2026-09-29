// Mobile menu
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
menuBtn.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
});
const closeMenu = () => {
  menu.classList.remove('open');
  menuBtn.setAttribute('aria-expanded', 'false');
};
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && menu.classList.contains('open')) { closeMenu(); menuBtn.focus(); }
});
document.addEventListener('click', e => {
  if (menu.classList.contains('open') && !e.target.closest('.nav')) closeMenu();
});

// Header shadow on scroll
const nav = document.querySelector('.nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 10);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Highlight current section in the menu
const navLinks = [...menu.querySelectorAll('a[href^="#"]:not(.btn)')];
const sectionIO = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    navLinks.forEach(a => {
      const active = a.getAttribute('href') === '#' + e.target.id;
      a.classList.toggle('active', active);
      if (active) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
    });
  });
}, { rootMargin: '-45% 0px -50% 0px' });
navLinks.forEach(a => { const sec = document.querySelector(a.getAttribute('href')); if (sec) sectionIO.observe(sec); });

// Reveal on scroll
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal, .about-visual').forEach(el => io.observe(el));

// Count-up stats (skipped when the user prefers reduced motion)
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const counters = document.querySelectorAll('[data-count]');
const countIO = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target, target = +el.dataset.count, start = performance.now(), dur = 1400;
    const tick = now => {
      const p = Math.min((now - start) / dur, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))).toLocaleString('el-GR');
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    countIO.unobserve(el);
  });
}, { threshold: 0.5 });
if (!reduceMotion) counters.forEach(c => { c.textContent = '0'; countIO.observe(c); });

// Booking form: min date = today, weekends not allowed
const dateInput = document.querySelector('input[name="date"]');
const today = new Date();
dateInput.min = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
dateInput.addEventListener('input', () => {
  const [y, m, day] = dateInput.value.split('-').map(Number);
  const d = new Date(y, m - 1, day).getDay();
  dateInput.setCustomValidity(d === 0 || d === 6 ? 'Επιλέξτε εργάσιμη ημέρα (Δευτέρα – Παρασκευή).' : '');
});

// Booking form submit (Formspree, via fetch)
const form = document.getElementById('booking-form');
const status = form.querySelector('.form-status');
form.addEventListener('submit', async ev => {
  ev.preventDefault();
  if (form.action.includes('YOUR_FORM_ID')) {
    status.className = 'form-status err';
    status.textContent = 'Η φόρμα δεν έχει συνδεθεί ακόμα. Καλέστε μας στο 694 472 1926.';
    return;
  }
  const btn = form.querySelector('button');
  btn.disabled = true; btn.textContent = 'Αποστολή…';
  try {
    const res = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
    if (!res.ok) throw new Error();
    form.reset();
    status.className = 'form-status ok';
    status.textContent = 'Ευχαριστούμε! Λάβαμε το αίτημά σας και θα επικοινωνήσουμε σύντομα.';
  } catch {
    status.className = 'form-status err';
    status.textContent = 'Κάτι πήγε στραβά. Δοκιμάστε ξανά ή καλέστε μας.';
  } finally {
    btn.disabled = false; btn.textContent = 'Αποστολή αιτήματος';
  }
});

document.getElementById('year').textContent = new Date().getFullYear();
