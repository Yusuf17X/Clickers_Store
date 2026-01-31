const cartToggleButtons = document.querySelectorAll('[data-cart-toggle]');
const cartDrawer = document.querySelector('[data-cart-drawer]');
const searchToggleButtons = document.querySelectorAll('[data-search-toggle]');
const searchDrawer = document.querySelector('[data-search-drawer]');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

if (cartDrawer && cartToggleButtons.length) {
  cartToggleButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      cartDrawer.classList.toggle('open');
    });
  });
}

if (searchDrawer && searchToggleButtons.length) {
  searchToggleButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const isOpen = searchDrawer.style.display === 'block';
      searchDrawer.style.display = isOpen ? 'none' : 'block';
    });
  });
}

if (searchInput && searchResults) {
  const sampleResults = [
    'Nova Pro Keyboard',
    'Pulse Wireless Mouse',
    'Glide Desk Mat',
    'Orbit Coiled Cable'
  ];

  searchInput.addEventListener('input', (event) => {
    const term = event.target.value.toLowerCase();
    if (!term) {
      searchResults.textContent = 'Start typing to search...';
      return;
    }
    const matches = sampleResults.filter((item) => item.toLowerCase().includes(term));
    searchResults.innerHTML = matches.length
      ? matches.map((item) => `<div>${item}</div>`).join('')
      : '<div>No results found.</div>';
  });
}

const modalButtons = document.querySelectorAll('[data-modal]');
modalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const target = document.getElementById(button.dataset.modal);
    if (target) target.classList.add('open');
  });
});

const modalCloseButtons = document.querySelectorAll('[data-close]');
modalCloseButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    if (modal) modal.classList.remove('open');
  });
});

const faqButtons = document.querySelectorAll('.faq-question');
faqButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;
    if (answer) {
      const isVisible = answer.style.display === 'block';
      answer.style.display = isVisible ? 'none' : 'block';
    }
  });
});