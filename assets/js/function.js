const menuToggle = document.getElementById('menu-toggle');
const navItems = document.querySelector('.navitems');

menuToggle.addEventListener('click', function() {
    menuToggle.classList.toggle('active');  // Toggles the 'active' class on the icon
    navItems.classList.toggle('active');    // Toggles the 'active' class to show/hide the menu
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
  
  