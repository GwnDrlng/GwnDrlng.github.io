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

// Mark active nav link
const path = window.location.pathname.replace(/\/$/, '') || '/index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  const href = a.getAttribute('href').replace(/\/$/, '');
  if (path === href || (href !== '/' && path.startsWith(href))) {
    a.style.color = 'var(--text-bright)';
  }
});
