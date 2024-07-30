// Toggle the menu icon and navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Scroll section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // Sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove toggle icon navbar when clicking navbar link
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Scroll to top functionality
document.getElementById('scrollToTop').onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

// Scroll reveal effects
ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// Typed.js functionality
// const typed = new Typed('.multiple-text', {
//   strings: ['Frontend Developer', 'Graphic Designer', 'Trader', 'Gym Trainer'],
//   typeSpeed: 100,
//   backSpeed: 100,
//   backDelay: 1000,
//   loop: true
// });

document.addEventListener('DOMContentLoaded', () => {
  const typed = new Typed('.multiple-text', {
      strings: ['Frontend Developer', 'Gym Trainer',
        'Graphic Designer', 'Trader', ],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
  });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting normally

        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const emailSubject = document.getElementById('emailSubject').value;
        const message = document.getElementById('message').value;

        // Construct the mailto link
        const mailtoLink = `mailto:sk6388502@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(`From: ${fullName} (${email})\n\n${message}`)}`;

        // Open the mail client
        window.location.href = mailtoLink;
    });
    
