// JavaScript to dynamically update active link based on scroll position
window.addEventListener("scroll", function () {
    let sections = document.querySelectorAll(".content-section");
    let navLinks = document.querySelectorAll(".vertical-nav a");

    sections.forEach((section, index) => {
        let sectionTop = section.offsetTop;
        let sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
            navLinks.forEach(link => link.classList.remove("active"));
            navLinks[index].classList.add("active");
        }
    });
});

// JavaScript to toggle mobile menu
const menuBtn = document.getElementById('menu-btn');
const nav = document.getElementById('vertical-nav');
const navLinks = document.querySelectorAll('.vertical-nav a');

// Toggle the menu on button click
menuBtn.addEventListener('click', function () {
    nav.classList.toggle('active');
});

// Automatically close the menu when a link is clicked (mobile view)
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        if (window.innerWidth <= 768) {  // Only close the menu on mobile view
            nav.classList.remove('active');
        }
    });
});


const carouselSlide = document.querySelector('.carousel-slide');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const dots = document.querySelectorAll('.dot');

let counter = 0;
const size = carouselItems[0].clientWidth;
let autoplayInterval;

// Update the carousel to show the correct slide
function updateCarousel() {
    // Loop the carousel
    if (counter >= carouselItems.length) {
        counter = 0;
    } else if (counter < 0) {
        counter = carouselItems.length - 1;
    }

    // Remove active class from all items
    carouselItems.forEach(item => item.classList.remove('active'));

    // Add active class to the current item
    carouselItems[counter].classList.add('active');

    // Update the carousel position
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;

    // Update dots
    dots.forEach(dot => dot.classList.remove('active'));
    dots[counter].classList.add('active');
}

// Move to next slide
nextBtn.addEventListener('click', () => {
    counter++;
    updateCarousel();
});

// Move to previous slide
prevBtn.addEventListener('click', () => {
    counter--;
    updateCarousel();
});

// Update slide on dot click
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        counter = index;
        updateCarousel();
    });
});

// Autoplay functionality
function startAutoplay() {
    autoplayInterval = setInterval(() => {
        counter++;
        updateCarousel();
    }, 5000); // Change slides every 5 seconds
}

function stopAutoplay() {
    clearInterval(autoplayInterval);
}

// Start autoplay
startAutoplay();

// Pause autoplay when user interacts with the carousel (buttons, dots)
carouselSlide.addEventListener('mouseover', stopAutoplay);
carouselSlide.addEventListener('mouseout', startAutoplay);
nextBtn.addEventListener('mouseover', stopAutoplay);
nextBtn.addEventListener('mouseout', startAutoplay);
prevBtn.addEventListener('mouseover', stopAutoplay);
prevBtn.addEventListener('mouseout', startAutoplay);