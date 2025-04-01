// -----------------------------
// Function to toggle the visibility of experience details with fade effect (works on all devices)
// -----------------------------
function toggleExperience(experienceId) {
  const experienceDetails = document.getElementById(experienceId);
  
  if (experienceDetails.style.display === 'block') {
    experienceDetails.style.opacity = 0;
    setTimeout(() => {
      experienceDetails.style.display = 'none';
    }, 300);
  } else {
    experienceDetails.style.display = 'block';
    setTimeout(() => {
      experienceDetails.style.opacity = 1;
    }, 10);
  }
}

// -----------------------------
// Add event listener to all experience items for toggling details (works on all devices)
// -----------------------------
document.querySelectorAll('.experience-item').forEach(item => {
  item.addEventListener('click', function() {
    this.classList.toggle('active');
    
    document.querySelectorAll('.experience-item').forEach(otherItem => {
      if (otherItem !== this) {
        otherItem.classList.remove('active');
      }
    });
  });
});

// -----------------------------
// Scroll to Home section when name is clicked
// -----------------------------
document.getElementById("name-click").addEventListener("click", function () {
  document.getElementById("Home").scrollIntoView();
});

// -----------------------------
// Get the hamburger button and navbar
// -----------------------------
const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");

// -----------------------------
// Toggle the active class on the hamburger button and navbar when clicked
// -----------------------------
hamburger.addEventListener("click", function(event) {
  event.stopPropagation(); // Prevent click event from propagating to document
  hamburger.classList.toggle("active");
  navbar.classList.toggle("active");
});

// -----------------------------
// Close navbar when clicking outside of it
// -----------------------------
document.addEventListener("click", function(event) {
  if (!navbar.contains(event.target) && !hamburger.contains(event.target)) {
    navbar.classList.remove("active");
    hamburger.classList.remove("active");
  }
});

// -----------------------------
// Prevent closing the menu when clicking inside the navbar
// -----------------------------
navbar.addEventListener("click", function(event) {
  event.stopPropagation(); // Prevent the click from propagating to the document
});

// -----------------------------
// Scroll instantly for navbar links & close menu after clicking a link
// -----------------------------
document.querySelectorAll("#navbar a").forEach(link => {
  link.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default anchor behavior

    const targetId = this.getAttribute("href").substring(1); // Get section ID
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView();
    }

    navbar.classList.remove("active");
    hamburger.classList.remove("active");
  });
});

// -----------------------------
// Ensure better touch responsiveness on mobile
// -----------------------------
hamburger.addEventListener("touchstart", function(event) {
  event.stopPropagation();
  event.preventDefault(); // Prevent accidental double-taps
  hamburger.classList.toggle("active");
  navbar.classList.toggle("active");
});

// -----------------------------
// For mobile (below 480px), ensure all experience descriptions are visible
// -----------------------------
if (window.innerWidth <= 480) {
  document.querySelectorAll('.experience-details').forEach(detail => {
    detail.style.display = 'block';
  });
}

// -----------------------------
// Trigger a resize event on window load to force recalculation of layout
// -----------------------------
window.addEventListener('load', function () {
  window.dispatchEvent(new Event('resize'));
});

// -----------------------------
// Add event listener to handle window resize for responsive adjustments
// -----------------------------
window.addEventListener('resize', function() {
  const isMobile = window.innerWidth <= 480;
  
  // Adjust experience details for mobile
  if (isMobile) {
    document.querySelectorAll('.experience-details').forEach(detail => {
      detail.style.display = 'block';
    });
  } else {
    document.querySelectorAll('.experience-details').forEach(detail => {
      detail.style.display = 'none'; // Set your default display for non-mobile views
    });
  }
});

document.querySelectorAll("#navbar a").forEach(link => {
  link.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default anchor behavior

    const targetId = this.getAttribute("href").substring(1); // Get section ID
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      let navbarHeight = document.querySelector('header').offsetHeight; // Get navbar height
      let elementPosition = targetSection.getBoundingClientRect().top + window.scrollY;
      let offsetPosition = elementPosition - navbarHeight; // Adjust for fixed navbar height

      // Use scrollIntoView with smooth behavior
      targetSection.scrollIntoView({
        behavior: "smooth", // Enables smooth scrolling
        block: "start" // Aligns the top of the section with the viewport
      });
    }

    // Close the dropdown menu after clicking
    navbar.classList.remove("active");
    hamburger.classList.remove("active");
  });
});



