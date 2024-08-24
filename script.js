const symbols = [
    '·', '•', '—', '|', '↑', '→', '↓', '←', '$', '₹', '€', '©', '®', '™', '×',
    '¥', '£', '§', '¶', '†', '‡', '…', '≈', '≠', '≤'
];

const symbolGrid = document.getElementById('symbol-grid');
const toast = document.getElementById('toast');
const themeToggle = document.getElementById('theme-toggle');


// Theme toggle functionality
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    updateThemeToggleIcon();
});

function updateThemeToggleIcon() {
    themeToggle.textContent = document.body.classList.contains('dark-theme') ? '☼' : '☾';
}

// Initialize theme based on user preference
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-theme');
}
updateThemeToggleIcon();

symbols.forEach((symbol) => {
    const card = document.createElement('div');
    card.className = 'symbol-card';
    card.innerHTML = `<div class="symbol">${symbol}</div>`;
    card.addEventListener('click', () => {
        navigator.clipboard.writeText(symbol)
            .then(() => {
                showToast(`Copied ${symbol} to clipboard!`);
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    });
    symbolGrid.appendChild(card);
});

function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}