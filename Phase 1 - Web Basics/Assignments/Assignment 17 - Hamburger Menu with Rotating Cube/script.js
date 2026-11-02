document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.navbar .mobile-menu-toggle');

    const mobileMenu = document.querySelector('.navbar .mobile-menu-items');

    const cubeContainer = document.querySelector('.cube-container');

    toggleButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');

        cubeContainer.classList.toggle('hidden')
    });
});