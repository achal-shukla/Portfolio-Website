// Theme toggle (remembers choice)
const root = document.documentElement, themeBtn = document.getElementById('theme');
try { const t = localStorage.getItem('theme'); if (t) root.dataset.theme = t; } catch (e) {}
const label = () => themeBtn.textContent = root.dataset.theme === 'dark' ? 'Light mode' : 'Dark mode';
label();
themeBtn.addEventListener('click', () => {
  root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  try { localStorage.setItem('theme', root.dataset.theme); } catch (e) {}
  label();
});

// Skill bars fill when scrolled into view
const io = new IntersectionObserver(entries => entries.forEach(en => {
  if (en.isIntersecting) { en.target.querySelector('i').style.width = en.target.dataset.level + '%'; io.unobserve(en.target); }
}), { threshold: 0.4 });
document.querySelectorAll('[data-level]').forEach(li => io.observe(li));


// Reveal content gently as sections enter the viewport.
const revealTargets = document.querySelectorAll(
  'main section:not(.hero) > h2, main section:not(.hero) .two > *, main section:not(.hero) .card, main section:not(.hero) .timeline li, main section:not(.hero) .scroll, main section:not(.hero) .contact-links li'
);
revealTargets.forEach((el, index) => {
  el.classList.add('reveal');
  el.style.transitionDelay = `${(index % 3) * 90}ms`;
});

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
  revealTargets.forEach(el => revealObserver.observe(el));
} else {
  revealTargets.forEach(el => el.classList.add('is-visible'));
}

// Contact form: validate, then POST to the Spring Boot API
const form = document.getElementById('contact-form'), status = document.getElementById('status');
const rules = {
  name: v => v.trim().length >= 2 || 'Enter your name (at least 2 characters).',
  email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) || 'Enter a valid email address.',
  message: v => v.trim().length >= 10 || 'Write at least 10 characters.'
};
form.addEventListener('submit', async e => {
  e.preventDefault();
  let ok = true;
  for (const k in rules) {
    const r = rules[k](form.elements[k].value);
    form.querySelector(`[data-err="${k}"]`).textContent = r === true ? '' : r;
    if (r !== true) ok = false;
  }
  if (!ok) return;
  status.textContent = 'Sending…';
  try {
    const res = await fetch('/api/contact', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: form.elements.name.value, email: form.elements.email.value, message: form.elements.message.value })
    });
    if (!res.ok) throw new Error();
    form.reset();
    status.textContent = 'Message sent. Thank you!';
  } catch (err) {
    status.textContent = 'Could not send. Check that the server and MySQL are running.';
  }
});

