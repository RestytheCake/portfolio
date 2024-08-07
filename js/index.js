document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.getElementById('mode-toggle');
    const body = document.body;

    // Check for saved user preference, if any, on load of the website
    const currentTheme = localStorage.getItem('theme') || 'light-mode'; // Default to light mode
    body.classList.add(currentTheme);
    if (currentTheme === 'dark-mode') {
        toggleSwitch.checked = true;
    }

    toggleSwitch.addEventListener('change', () => {
        if (toggleSwitch.checked) {
            body.classList.add('dark-mode');
            body.classList.remove('light-mode');
            localStorage.setItem('theme', 'dark-mode');
        } else {
            body.classList.add('light-mode');
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light-mode');
        }
    });
});
