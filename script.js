let icon = document.querySelector('.icon');

// Check localStorage and apply theme on page load
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
}

// Toggle theme and save to localStorage
icon.onclick = function () {
    document.body.classList.toggle('dark-theme');
    saveToStorage();
}

function saveToStorage() {
    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}
