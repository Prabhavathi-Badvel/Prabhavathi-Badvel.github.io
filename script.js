
// Function to handle intersection observations
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            document.getElementById("About").style.visibility=="hidden" ? document.getElementById("About").style.visibility=="visible" : ""
            observer.unobserve(entry.target); // Stop observing once shown
        }
    });
}

 // Create a new intersection observer
const observer = new IntersectionObserver(handleIntersection, {
     root: null, // viewport
     rootMargin: '0px', // no margin
     threshold: 0.5 // 50% of the element visible
});

// Get all elements with class 'animate' (and other animation classes)
const elements = document.querySelectorAll('.animate, .slide-up, .slide-down, .fade-in, .zoom-in');
elements.forEach(element => {
    observer.observe(element); // Observe each element
});

// preview a project image
function preview(image) {
      // const imgElement = document.getElementById('projectImage');
      const imageNmae = image.getAttribute('src').split('/')[2];
      
      // Change the image source based on the current source
      var imageType = imageNmae.split(".")[1]

      
      if (imageNmae.split(".")[0] === 'carstand_webapp') {
            if(imageType === 'png'){
                  image.setAttribute('src', './images/carstand_webapp.png');
            }else {
                  image.setAttribute('src', './images/carstand_webapp.gif');
            }
          
      } 
      if (imageNmae.split(".")[0] === 'mrmason_webapp') {
            if(imageType === 'png'){
                  image.setAttribute('src', './images/mrmason_webapp.png');
            }else {
                  image.setAttribute('src', './images/mrmason_webapp.gif');
            }
          
      } 

      if (imageNmae.split(".")[0] === 'github') {
            if(imageType === 'gif'){
                  image.setAttribute('src', './images/github.png');
            } else {
                  image.setAttribute('src', './images/github.gif');
            }
      }
      console.log(imageNmae)

     
}
