/*** Dark Mode ***
  
  Purpose:
  - Use this starter code to add a dark mode feature to your website.

  When To Modify:
  - [ ] Project 5 (REQUIRED FEATURE) 
  - [ ] Any time after
***/

// Step 1: Select the theme button
let themeButton = document.getElementById("theme-button");

const toggleDarkMode = () => {
  document.documentElement.classList.toggle("dark-mode");

  // Button glow animation
  themeButton.classList.add("glow");
  setTimeout(() => themeButton.classList.remove("glow"), 800);

  // Optional: save preference
  const isDark = document.documentElement.classList.contains("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
};

// On page load, check saved theme
if (localStorage.getItem("theme") === "dark") {
  document.documentElement.classList.add("dark-mode");
}

themeButton.addEventListener("click", toggleDarkMode);


/*** Form Handling ***
  
  Purpose:
  - When the user submits the RSVP form, the name and state they 
    entered should be added to the list of participants.

  When To Modify:
  - [ ] Project 6 (REQUIRED FEATURE)
  - [ ] Project 6 (STRETCH FEATURE) 
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/
let rsvpButton = document.getElementById("rsvp-button");
let count = 3;

function addParticipant(person) {
  const participantsDiv = document.getElementById("rsvp-participants");

  const newParticipant = document.createElement("p");
  newParticipant.textContent = `🐚 ${person.name} from ${person.hometown} has RSVP'd.`;
  participantsDiv.appendChild(newParticipant);

  // Update count once
  const countDisplay = document.getElementById("rsvp-count");
  count++;
  countDisplay.textContent = `⭐ ${count} people have RSVP'd to this event!`;
}

/*** Form Validation ***
  
  Purpose:
  - Prevents invalid form submissions from being added to the list of participants.

  When To Modify:
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 7 (STRETCH FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: We actually don't need to select the form button again -- we already did it in the RSVP code above.

// Step 2: Write the callback function
const validateForm = (event) => {
  event.preventDefault();

  let containsErrors = false;
  const rsvpInputs = document.getElementById("rsvp-form").elements;

  for (let i = 0; i < rsvpInputs.length; i++) {
    let input = rsvpInputs[i];
    if (input.value.trim().length < 2) {
      containsErrors = true;
      input.classList.add("error");
    } else {
      input.classList.remove("error");
    }
  }



  
  if (!containsErrors) {

    // Build the person object (using input order)
    let person = {
        name: rsvpInputs[0].value.trim(),
        email: rsvpInputs[1].value.trim(),
        hometown: rsvpInputs[2].value.trim()
    };

    addParticipant(person);
    toggleModal(person);


    // Clear inputs
    for (let i = 0; i < rsvpInputs.length; i++) {
        rsvpInputs[i].value = "";
    }
}

};

rsvpButton.addEventListener("click", validateForm);


// Step 3: Replace the form button's event listener with a new one that calls validateForm()
/*** Scroll Animations ***
  
  Purpose:
  - Use this starter code to add scroll animations to your website.

  When To Modify:
  - [ ] Project 8 (REQUIRED FEATURE)
  - [ ] Any time after
***/

// Step 1: Select all elements with the class 'revealable'.
let revealableContainers = document.querySelectorAll(".revealable");

// Step 2: Write function to reveal elements when they are in view.
const reveal = () => {
    for (let i = 0; i < revealableContainers.length; i++) {
        let current = revealableContainers[i];

        // Get current height of container and window
        let windowHeight = window.innerHeight;
        let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
        let revealDistance = parseInt(getComputedStyle(current).getPropertyValue('--reveal-distance'), 10);

        // If the container is within range, add the 'active' class to reveal
        if (topOfRevealableContainer < windowHeight - revealDistance) {
            current.classList.add("active");
        }
        // If the container is not within range, hide it by removing the 'active' class
        else { 
            current.classList.remove("active");
        }
    }
}

// Step 3: Whenever the user scrolls, check if any containers should be revealed
window.addEventListener('scroll', reveal);

/* ===== Fade-In Scroll Observer ===== */

const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible'); // allows re-trigger
    }
  });
}, {
  threshold: 0.2 // triggers animation when 20% of element is visible
});

fadeElements.forEach(el => observer.observe(el));

// Select the reduce motion button
const reduceMotionButton = document.getElementById("reduce-motion-button");

// Toggle motion on/off
function reduceMotion() {
    document.body.classList.toggle("reduce-motion");

    // (Optional) Change button text to show state
    if (document.body.classList.contains("reduce-motion")) {
        reduceMotionButton.textContent = "Enable Motion";
    } else {
        reduceMotionButton.textContent = "Reduce Motion";
    }
}

// Add the event listener
reduceMotionButton.addEventListener("click", reduceMotion);


/*** Modal ***
  
  Purpose:
  - Use this starter code to add a pop-up modal to your website.

  When To Modify:
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Project 9 (STRETCH FEATURE)
  - [ ] Any time after
***/

const toggleModal = (person) => {
    
    // Select the modal and the text content inside
    const modal = document.getElementById("success-modal");
    const modalContent = document.getElementById("modal-text");

    // Show the modal by changing its display to flex
    modal.style.display = "flex";

    // Set the personalized message
    modalContent.textContent = `Thanks for RSVPing, ${person.name}! We can't wait to see you at the event!! 🎉`;

    // Start rotating the image every 0.5s
    let intervalId = setInterval(animateImage, 500);

    // Hide modal and stop animation after 5 seconds
    setTimeout(() => {
        modal.style.display = "none";
        clearInterval(intervalId);
    }, 5000);



    
}

// TODO: animation variables and animateImage() function
let rotateFactor = 0;
const modalImage = document.getElementById("modal-image");


function animateImage() {
    const modalImage = document.getElementById("modal-image"); // select it here
    if (!modalImage) return;

    if (rotateFactor === 0) {
        rotateFactor = -10;
    } else {
        rotateFactor = 0;
    }
    modalImage.style.transform = `rotate(${rotateFactor}deg)`;
}
