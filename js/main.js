// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (toggle && navLinks) {
  toggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  document.addEventListener('click', e => {
    if (!toggle.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('open');
    }
  });
}

// Scroll reveal: cards and widgets rise over the fixed backdrop
const revealables = document.querySelectorAll(
  '.card, .metric, .outcome-card, .thinking-item, .recognition-badge, .credential, .sidebar-card, .value-chip'
);
if ('IntersectionObserver' in window && revealables.length) {
  const groups = new Map();
  revealables.forEach(el => {
    el.classList.add('reveal');
    const parent = el.closest('.cards-grid, .metrics, .outcomes-grid, .thinking-grid, .recognition-strip, .credential-list, .values-grid, .cs-sidebar') || el.parentElement;
    const idx = groups.get(parent) || 0;
    el.style.setProperty('--reveal-delay', `${Math.min(idx, 5) * 70}ms`);
    groups.set(parent, idx + 1);
  });
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
  revealables.forEach(el => io.observe(el));
}

// Mark active nav link with the overline indicator
const page = (window.location.pathname.split('/').pop() || 'index.html');
// Case studies live under Work
const sectionMap = {
  'incident360.html': 'work.html',
  'outrider.html': 'work.html',
  'manulife.html': 'work.html',
  'ai-operations.html': 'work.html'
};
const target = sectionMap[page] || page;
document.querySelectorAll('.nav-links a:not(.nav-cta)').forEach(a => {
  if (a.getAttribute('href') === target) a.classList.add('active');
});
