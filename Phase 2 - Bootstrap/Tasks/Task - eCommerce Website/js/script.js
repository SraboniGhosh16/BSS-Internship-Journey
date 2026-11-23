// Navbar scroll
function userScroll() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-white');
        } else {
            navbar.classList.remove('bg-white');
        }
    });
}

document.addEventListener('DOMContentLoaded', userScroll);

// Customer review section buttons
const reviewCards = document.getElementById("review-customer-cards");
const customerCards = reviewCards.querySelector(".customer-cards");

const nextReview = document.getElementById("nextReviewButton");
const prevReview = document.getElementById("prevReviewButton");

nextReview.addEventListener('click', () => {
    const nextCard = customerCards.firstElementChild;
    customerCards.appendChild(nextCard);
});

prevReview.addEventListener('click', () => {
    const prevCard = customerCards.lastElementChild;
    customerCards.prepend(prevCard);
});