// JavaScript placeholder for future features (quote generator, video controls, etc.)
console.log("Billionaires Website Loaded.");

const menuIcon = document.getElementById('menuIcon');
const navLinks = document.getElementById('navLinks');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');

  // Toggle icon content
  if (navLinks.classList.contains('active')) {
    menuIcon.innerHTML = '&times;'; // Close icon
  } else {
    menuIcon.innerHTML = '&#9776;'; // Hamburger icon
  }
});
