const menuToggle = document.getElementById('menu-toggle');
const navItems = document.querySelector('.navitems');

menuToggle.addEventListener('click', function() {
    menuToggle.classList.toggle('active');  // Toggles the 'active' class on the icon
    navItems.classList.toggle('active');    // Toggles the 'active' class to show/hide the menu
});

AOS.init({
  duration: 1000, // Animation duration in ms (default 400)
  easing: 'ease-in-out', // Type of easing (default ease)
  once: true, // Whether the animation should happen only once
  mirror: false // Animate on scroll going back up
});

$(document).ready(function(){
    $('.carousel').slick({
      infinite: true,        // Looping
      slidesToShow: 1,       // Number of items visible at once (adjust for desktop)
      slidesToScroll: 1,     // Scroll one item at a time
      autoplay: true,        // Autoplay feature
      autoplaySpeed: 3000,   // Time between auto scrolls (in milliseconds)
      responsive: [
        {
          breakpoint: 1024,  // For tablet screens
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,   // For mobile screens
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  });
  
  