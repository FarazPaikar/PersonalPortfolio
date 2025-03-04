// JavaScript function to toggle the visibility of experience details
function toggleExperience(experienceId) {
  const experienceText = document.getElementById(experienceId);
  // Check if the element is currently displayed or hidden
  if (experienceText.style.display === "none" || experienceText.style.display === "") {
    experienceText.style.display = "block";  // Show the text block
  } else {
    experienceText.style.display = "none";  // Hide the text block
  }
}

// Optional: Make sure the experience details are hidden by default when the page loads
window.onload = function() {
  const experienceDetails = document.querySelectorAll('.experience-details-text');
  experienceDetails.forEach(function(detail) {
    detail.style.display = 'none';  // Hide all experience details initially
  });
};

// Add event listener to all experience items
document.querySelectorAll('.experience-item').forEach(item => {
  item.addEventListener('click', function() {
    // Toggle active class to show/hide details for this specific item
    this.classList.toggle('active');
    
    // Close other items (this keeps only one item expanded at a time)
    document.querySelectorAll('.experience-item').forEach(otherItem => {
      if (otherItem !== this) {
        otherItem.classList.remove('active');
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const experienceItems = document.querySelectorAll(".experience-item");

  experienceItems.forEach((item) => {
    const logo = item.querySelector(".experience-logo");
    const details = item.querySelector(".experience-details-text");

    logo.addEventListener("click", function () {
      // Hide all other details
      experienceItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
          otherItem.querySelector(".experience-details-text").classList.remove("show");
        }
      });

      // Toggle current one
      const isActive = item.classList.contains("active");
      if (isActive) {
        item.classList.remove("active");
        details.classList.remove("show");
      } else {
        item.classList.add("active");
        details.classList.add("show");
      }
    });
  });
});
