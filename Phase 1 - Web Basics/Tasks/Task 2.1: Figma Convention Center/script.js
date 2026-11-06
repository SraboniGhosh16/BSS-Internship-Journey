document.addEventListener('DOMContentLoaded', function() {
    // ----- Navbar Hamburger Menu
    const toggleButton = document.querySelector('.navbar__mobile-menu-toggle');
    const mobileMenu = document.querySelector('.navbar__mobile-menu-items');

    toggleButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
    });

    // ----- Hero Slider
    const slider = document.querySelector('.hero__slider');
    const sliderImages = document.querySelectorAll('.hero__slider-image');
    
    let currentImage = 0;
    const totalImages = sliderImages.length;

    // Hero Slider Buttons
    const slideLeft = document.querySelector('.hero__slider-button-left');
    const slideRight = document.querySelector('.hero__slider-button-right');

    // Hero Slider Indicators
    const slideIndicator = document.querySelectorAll('.hero__slider-indicator');

    // Display Image by Index
    function showSlide(index) {
        slider.style.transform = `translateX(-${index * 100}%)`;

        // Update active indicator for current slide
        slideIndicator.forEach((slideIndicator, i) => {
            slideIndicator.classList.toggle('active', i == index);
        });
        currentImage = index;
    }

    // Function to move to the Next Image/Slide
    function nextImage() {
        currentImage++;
        if (currentImage >= totalImages) {
            currentImage = 0;  // Takes to the first image
        }
        showSlide(currentImage);
    };

    // Function to move to the Previous Image/Slide
    function prevImage() {
        currentImage--;
        if (currentImage < 0) {
            currentImage = totalImages - 1; // Takes to the last/4th image
        }
        showSlide(currentImage);
    };
    
    // Call Next Image/Previous Image functions
    // Slide Manually
    slideRight.addEventListener('click', function() {
        nextImage();
        resetTimer();
    });
    slideLeft.addEventListener('click', function() {
        prevImage();
        resetTimer();
    });

    // Slide Auto
    let slideTimer = setInterval(nextImage, 4000);

    // Reset timer because after manual slide, timer breaks
    // need to call it after slide button click
    function resetTimer() {
        clearInterval(slideTimer);
        slideTimer = setInterval(nextImage, 4000);
    }

    // ----- Booking ad
    const xButton = document.querySelector('.close-ad');
    const ad = document.querySelector('.booking-ad');

    xButton.addEventListener('click', function() {
        ad.classList.toggle('active');
    });

    // ----- FAQ drop down
    const dropButtons = document.querySelectorAll('.faq__drop-button');
    const faqAllAns = document.querySelectorAll('.faq__content-ans');

    dropButtons.forEach(dropButton => {
        dropButton.addEventListener('click', function() {
            const thisDiv = this.closest('div');
            const faqAns = thisDiv.nextElementSibling;

            const isAlreadyActive = faqAns.classList.contains('active');

            if(!isAlreadyActive) {
                // close all answer paragraphs and buttons, so that one at a time is active
                faqAllAns.forEach(p => {
                    p.classList.remove('active');
                    dropButton.classList.remove('active');
                });
                   
                faqAns.classList.add('active');
                dropButton.classList.add('active');
            }
            else {
                faqAns.classList.remove('active');
                dropButton.classList.remove('active');
            }
        });
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