  /*========= toggle icon  navbar==========*/
  let menuIcon = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.navbar');
  menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  };


  /*========= scoll section active link==========*/
let sections = document.querySelectorAll('section');
let nalinks = document.querySelector(' header nav a');

window.onscroll = () => {
    sections.forEach(sec =>  {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            nalinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
             });

           };
        });

        /*========= sticky navbar==========*/
        let header = document.querySelector('header');

        header.classList.toggle('sticky' , window.scrollY > 100);


         /*=========  remove toggle icon  navba when click navbar link(scroll)==========*/
         menuIcon.classList.remove('bx-x');
         navbar.classList.remove('active');

           
};


    /*========= scroll reaveal==========*/
    ScrollReveal({ 
        //reset: true,
        distance: '80px',
        duration:2000,
        delay:200
        
     });

     ScrollReveal().reveal('.home-content, .heading', { origin:'top' });
     ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin:'bottom' });
     ScrollReveal().reveal('.home-content h1, .about-img', { origin:'left' });
     ScrollReveal().reveal('.home-content p, .about-content', { origin:'right' });
    //  ScrollReveal().reveal('.home-content h1, .about-img', { origin:'left' });

       /*========= typed js==========*/

    document.addEventListener('DOMContentLoaded', () => {
        const typed = new Typed('.multiple-text',{
        strings:['Frontend Developer', 'Graphic Designer','Trader','Gym Trainer' ],
        typeSpeed:100,
        backSpeed:100,
        backDelay:1000,
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


// JavaScript (java.js or your script file)

document.addEventListener('DOMContentLoaded', function() {
  // Select the follow button
  const followButton = document.querySelector('.follow-btn');

  // Add click event listener
  followButton.addEventListener('click', function() {
      // Perform your action here when the button is clicked
      alert('You are now following Sachin Kumar!');
      // You can add more functionality here, like sending a request to follow or changing button state
  });
});





