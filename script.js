// Function to toggle the visibility of experience details with fade effect
function toggleExperience(experienceId) {
  const experienceDetails = document.getElementById(experienceId);  // Get the experience details element by its ID

  // Check if the details are already active (currently visible)
  if (experienceDetails.style.display === 'block') {  // If the element is already visible
    experienceDetails.style.opacity = 0;  // Set opacity to 0 to make it fade out
    setTimeout(() => {  // Wait for the fade-out duration
      experienceDetails.style.display = 'none';  // After the fade-out, hide the element
    }, 300);  // Match the duration of the CSS fade-out transition (300ms)
  } else {  // If the details are not visible
    experienceDetails.style.display = 'block';  // Make sure the element is shown (display: block)
    setTimeout(() => {  // Small delay to ensure opacity transition happens after element becomes visible
      experienceDetails.style.opacity = 1;  // Set opacity to 1 to make it fade in
    }, 10);  // Add slight delay before opacity change
  }
}

// Add event listener to all experience items for toggling details
document.querySelectorAll('.experience-item').forEach(item => {  // Select all elements with class 'experience-item'
  item.addEventListener('click', function() {  // Add click event listener to each item
    this.classList.toggle('active');  // Toggle 'active' class to show/hide details for this specific item
    
    // Close other items (this keeps only one item expanded at a time)
    document.querySelectorAll('.experience-item').forEach(otherItem => {  // Loop through all experience items
      if (otherItem !== this) {  // Ensure other items are closed when the current item is clicked
        otherItem.classList.remove('active');  // Remove 'active' class from other items
      }
    });
  });
});

// Scroll to Home section when name is clicked
document.getElementById("name-click").addEventListener("click", function () {  // Add click event listener to the element with ID 'name-click'
  document.getElementById("Home").scrollIntoView({ behavior: "smooth" });  // Scroll to the element with ID 'Home' smoothly
});

