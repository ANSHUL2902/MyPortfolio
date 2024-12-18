const scroller = document.querySelectorAll('.scroller');

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scroller.forEach((scroller) => {
    scroller.setAttribute('data-animation', true);
  });
}


//project images sliding
const images = ['./Assests/project/img1.jpg', './Assests/project/img2.jpg', './Assests/project/img3.jpg', './Assests/project/img4.jpg','./Assests/project/img5.jpg']; // Array of image sources
let currentIndex = 0;




function changeImage() {
  const slideshowImage = document.getElementById('slideshow-image');
  currentIndex = (currentIndex + 1) % images.length; // Update the index to loop through the images
  slideshowImage.src = images[currentIndex]; // Change the image source
}

// Change image every 3 seconds (3000 milliseconds)
setInterval(changeImage, 3000);



//side scrolling

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view'); // Add the class to animate
      observer.unobserve(entry.target); // Stop observing once the animation has triggered
    }
  });
}, { threshold: 0.1 }); // Trigger when 10% of the element is visible

// Observe each scroll-item
document.querySelectorAll('.scroll-item').forEach(item => {
  observer.observe(item);
});