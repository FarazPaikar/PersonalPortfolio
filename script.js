// -----------------------------
// Function to toggle the visibility of experience details with fade effect (desktop only)
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
// Add event listener to all experience items for toggling details (desktop only)
// -----------------------------
if (window.innerWidth > 480) {
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
}

// -----------------------------
// Scroll to Home section when name is clicked
// -----------------------------
document.getElementById("name-click").addEventListener("click", function () {
  document.getElementById("Home").scrollIntoView({ behavior: "smooth" });
});

// -----------------------------
// Get the hamburger button and navbar
// -----------------------------
const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");

// -----------------------------
// Toggle the active class on the hamburger button and navbar when clicked
// -----------------------------
hamburger.addEventListener("click", function() {
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
// Smooth scrolling for navbar links & close menu after clicking a link
// -----------------------------
document.querySelectorAll("#navbar a").forEach(link => {
  link.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default anchor behavior

    const targetId = this.getAttribute("href").substring(1); // Get section ID
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }

    // Close navbar after clicking a link
    navbar.classList.remove("active");
    hamburger.classList.remove("active");
  });
});

// -----------------------------
// For mobile (below 480px), ensure all experience descriptions are visible
// -----------------------------
if (window.innerWidth <= 480) {
  document.querySelectorAll('.experience-details').forEach(detail => {
    detail.style.display = 'block';
  });
}

// Trigger a resize event on window load to force recalculation of layout
window.addEventListener('load', function () {
  window.dispatchEvent(new Event('resize'));
});
