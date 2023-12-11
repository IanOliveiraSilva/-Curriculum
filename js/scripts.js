
window.addEventListener('DOMContentLoaded', event => {
    const isDarkMode = localStorage.getItem('dark-mode');
    const toggleButton = document.getElementById('toggle-mode');
    const body = document.body;
    const textNightElements = document.querySelectorAll('.text-night');
    const navbar = document.getElementById('sideNav');

    if (isDarkMode) {
        body.classList.add('dark-mode');
        navbar.classList.add('dark-mode');
        textNightElements.forEach(element => element.classList.add('dark-mode'));
    }

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        navbar.classList.toggle('dark-mode')
        textNightElements.forEach(element => element.classList.toggle('dark-mode'));

        const isDarkModeEnabled = body.classList.contains('dark-mode');
        localStorage.setItem('dark-mode', isDarkModeEnabled);
    });


    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
