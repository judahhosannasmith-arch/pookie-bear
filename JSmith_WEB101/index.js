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

function addParticipant() {
  event.preventDefault();

  const name = document.getElementById("name-input").value.trim();
  const email = document.getElementById("email-input").value.trim();
  const location = document.getElementById("location-input").value.trim();

  const participantsDiv = document.getElementById("rsvp-participants");

  // Create new RSVP line
  const newParticipant = document.createElement("p");
  newParticipant.textContent = `🐚 ${name} from ${location} has RSVP'd.`;
  participantsDiv.appendChild(newParticipant);

  // Update RSVP count text
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
    addParticipant(event);
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
let revealableContainers = TODO;

// Step 2: Write function to reveal elements when they are in view.
const reveal = () => {
    for (let i = 0; i < revealableContainers.length; i++) {
        let current = revealableContainers[i];

        // Get current height of container and window
        let windowHeight = TODO;
        let topOfRevealableContainer = TODO;
        let revealDistance = parseInt(getComputedStyle(current).getPropertyValue('--reveal-distance'), 10);

        // If the container is within range, add the 'active' class to reveal
        if (topOfRevealableContainer < windowHeight - revealDistance) {
            TODO;
        }
        // If the container is not within range, hide it by removing the 'active' class
        else { 
            TODO;
        }
    }
}

// Step 3: Whenever the user scrolls, check if any containers should be revealed
window.addEventListener(TODO, TODO);
/*** Success Modal [PLACEHOLDER] [ADDED IN UNIT 9] ***/