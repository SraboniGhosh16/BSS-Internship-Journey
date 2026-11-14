document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.mobile-menu-button');
    const mobileNavbar = document.querySelector('.navbar__mobile-menu-content');

    toggleButton.addEventListener('click', function() {
        mobileNavbar.classList.toggle('active');
    });

    // Tab Buttons
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabDatas = document.querySelectorAll('.about__content-tab-data > div'); // to get all the div inside this

    tabButtons.forEach(tabButton => {
        tabButton.addEventListener('click', function() { //listen to click for every button
            //remove highlight from all buttons
            tabButtons.forEach(button => button.classList.remove('active'));
            //add highlight to the clicked button/this button
            this.classList.add('active');

            //hide all tab datas so that only one is visible at a time
            tabDatas.forEach(data => {
                data.style.display = 'none';
            });

            //get the id of 'this' button to refer to the tab data
            const tabID = this.getAttribute('data-tab');

            //display the tab with the same id
            document.getElementById(tabID).style.display = 'block';
        });
    });

    // Menu Slide
    const menuItems = document.querySelector('.menu__items');
    const menuRight = document.querySelector('.menu__button-right');
    const menuLeft = document.querySelector('.menu__button-left');

    // for the right button, add the first item to the end of the items list
    menuRight.addEventListener('click', function() {
        menuItems.appendChild(menuItems.firstElementChild);
    });
    // for the left button, add the last item before the first item of the items list
    menuLeft.addEventListener('click', function() {
        menuItems.insertBefore(menuItems.lastElementChild, menuItems.firstElementChild);
    });
});

//Navigation Scroll Background
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');

    if (window.scrollY > 0) {
        navbar.classList.add('navbar--scroll');
    }
    else {
        navbar.classList.remove('navbar--scroll')
    }
});