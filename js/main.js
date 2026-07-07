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
