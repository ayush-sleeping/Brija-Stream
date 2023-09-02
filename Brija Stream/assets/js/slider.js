
/* ------------------- Home section 1st slider JS ------------------- */
/* ------------------- ---------------- ------------------- */

// Get the container for the home slider and initialize an empty array for sliders. ::
let carousel = document.querySelector('.home-slider-container');
let sliders = [];

// Initialize the slideIndex to 0. ::
let slideIndex = 0;

// Function to create a slide. ::
const createSlide = () =>{
    if(slideIndex >= movies.length){
        // Reset slideIndex when it reaches the end of the movies array ::
        slideIndex=0;
    }

    // Creating DOM elements for the slide content ::
    let slide = document.createElement('div');
    let imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let small = document.createElement('small');
    let p = document.createElement('p');
    let h2 = document.createElement('h2');

    // Attaching content to DOM elements ::
    imgElement.appendChild(document.createTextNode(''));    
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    small.appendChild(document.createTextNode(movies[slideIndex].moreInfo));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    h2.appendChild(document.createTextNode(movies[slideIndex].watch));
    content.appendChild(h1);
    content.appendChild(small);
    content.appendChild(p);
    content.appendChild(h2);

    // Attaching elements to the slide ::
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    // Set the image source to the movie's image URL ::
    imgElement.src = movies[slideIndex].image;

    // Increment slideIndex for the next slide ::
    slideIndex++;

    // Add CSS classes to style elements ::
    slide.className = 'slider';
    content.className = 'slider-content';
    h1.className = 'movie-title';
    small.className= 'more-info'
    p.className = 'movie-desc';
    h2.className= 'watch-movie';
    
    // Add the slide to the sliders array ::
    sliders.push(slide);

     // Adjust the margin to create a sliding effect ::
    if(sliders.length){
        sliders[0].style.marginLeft =  `calc(-${100 * (sliders.length - 2)}% - ${30 *(sliders.length - 2)}px)`; 
    }  
}

// Create initial slides ::
for(let i = 0; i < 6; i++){
    createSlide();
};                  

// Automatically create slides at intervals (e.g., every 3 seconds) ::
setInterval(()=>{
    createSlide();
},3000);







