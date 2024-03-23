document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-wrapper input');
    const colorOptions = document.querySelector('.color-options');

    searchInput.addEventListener('click', function() {
        colorOptions.style.display = colorOptions.style.display === 'block' ? 'none' : 'block';
    });

    colorOptions.addEventListener('click', function(event) {
        if (event.target.tagName === 'LI') {
            searchInput.value = event.target.textContent;
            colorOptions.style.display = 'none';
        }
    });

    document.addEventListener('click', function(event) {
        if (!searchInput.contains(event.target)) {
            colorOptions.style.display = 'none';
        }
    });
});
