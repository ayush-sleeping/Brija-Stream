'use strict';

/* ------------------- navbar variables ------------------- */
/* ------------------- ---------------- ------------------- */

/* This section defines variables related to the navbar :: */

const navOpenBtn = document.querySelector("[header-menu-openbtn]"); // Button to open the navigation menu
const navCloseBtn = document.querySelector("[header-menu-closebtn]");  // Button to close the navigation menu
const navbar = document.querySelector("[navbar]"); // The navigation bar itself
const overlay = document.querySelector("[header-container-overlay]"); // Overlay for the navigation menu

const navElemArr = [navOpenBtn, navCloseBtn, overlay]; // An array containing all navigation elements

// Adding click event listeners to navigation elements ::
for (let i = 0; i < navElemArr.length; i++) {

  navElemArr[i].addEventListener("click", function () {

    // Toggles the "active" class to show/hide the navigation menu and overlay ::
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("active");

  });

}



/* ------------------- header sticky ------------------- */
/* ------------------- ---------------- ------------------- */

/* This section handles the sticky behavior of the header :: */
const header = document.querySelector("[header]"); // The header element

window.addEventListener("scroll", function () {

  // Adding a scroll event listener to the window
  window.scrollY >= 10 
  ? header.classList.add("active")  // When scrolled down more than 10 pixels, adds the "active" class to the header
  : header.classList.remove("active"); // Otherwise, removes the "active" class from the header

});







