// JavaScript for cart drawer toggles
function toggleCartDrawer() {
    const cartDrawer = document.getElementById('cart-drawer');
    cartDrawer.classList.toggle('open');
}

// JavaScript for search drawer and results
function toggleSearchDrawer() {
    const searchDrawer = document.getElementById('search-drawer');
    searchDrawer.classList.toggle('open');
}

function displaySearchResults(results) {
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = '';
    results.forEach(result => {
        const resultItem = document.createElement('div');
        resultItem.className = 'result-item';
        resultItem.textContent = result;
        resultsContainer.appendChild(resultItem);
    });
}

// JavaScript for shop-the-look modals
function openShopTheLookModal() {
    const modal = document.getElementById('shop-the-look-modal');
    modal.classList.add('open');
}

function closeShopTheLookModal() {
    const modal = document.getElementById('shop-the-look-modal');
    modal.classList.remove('open');
}

// JavaScript for FAQ accordion behavior
function toggleFAQAccordion(accordionItem) {
    accordionItem.classList.toggle('expanded');
    const content = accordionItem.querySelector('.accordion-content');
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
}
