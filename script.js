/**
 * JavaScript file for interactivity and dynamic behavior
 * Add your JavaScript code here for animations, form handling, etc.
 */

// Example: Smooth scroll on navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Example: Add active class to current navigation item
function setActiveNav() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

setActiveNav();

// Portfolio search/filter logic
(function() {
  const searchInput = document.getElementById('portfolio-search');
  if (!searchInput) return;

  const cards = Array.from(document.querySelectorAll('.portfolio-card'));

  function filterCards() {
    const query = searchInput.value.trim().toLowerCase();
    if (!query) {
      cards.forEach(card => {
        card.style.display = '';
        card.style.order = '';
      });
      return;
    }

    const terms = query.split(/\s+/);
    let anyVisible = false;
    cards.forEach(card => {
      const tags = (card.dataset.tags || '').toLowerCase();
      const text = (card.innerText || '').toLowerCase();
      const matched = terms.every(term => tags.includes(term) || text.includes(term));
      if (matched) {
        card.style.display = '';
        card.style.order = '0';
        anyVisible = true;
      } else {
        card.style.display = 'none';
      }
    });

    const noMsg = document.getElementById('portfolio-no-results');
    if (noMsg) {
      noMsg.classList.toggle('hidden', anyVisible);
    }
  }

  // simple debounce
  let debounceTimer;
  searchInput.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(filterCards, 150);
  });
})();
