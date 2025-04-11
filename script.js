// Get references to the elements
const modeToggleButton = document.getElementById("mode-toggle"); //Mode Changer
const modeIcon = document.getElementById("mode-icon"); // Mode Icon
const boxx = document.getElementsByClassName("ext-box"); //Extention Box
const navv = document.getElementsByTagName("nav"); //Navigation
const allExt = document.getElementById("all-ext"); //All Button
const activeExt = document.getElementById("active-ext"); //Active Button
const inactiveExt = document.getElementById("inactive-ext"); //Inactive Button
const remove = document.getElementsByClassName("rem"); //Remove Button

//Theme Code//

// Check if dark mode is saved in localStorage, and apply it on page load
if (
  localStorage.getItem("dark-mode") === "enabled" &&
  localStorage.getItem("box-toggle") === "enabled"
) {
  document.body.classList.add("dark-mode");
  for (let i = 0; i < boxx.length; i++) {
    boxx[i].classList.add("box-toggle");
  }
  for (let i = 0; i < navv.length; i++) {
    navv[i].classList.add("box-toggle");
  }
  modeIcon.src = "assets/images/icon-sun.svg"; // Change to sun icon for dark mode
}

// Add event listener to toggle dark mode
modeToggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  for (let i = 0; i < boxx.length; i++) {
    boxx[i].classList.toggle("box-toggle");
  }
  for (let i = 0; i < navv.length; i++) {
    navv[i].classList.toggle("box-toggle");
  }

  // Toggle icon and save preference to localStorage
  if (document.body.classList.contains("dark-mode")) {
    modeIcon.src = "assets/images/icon-sun.svg"; // Sun icon for dark mode
    localStorage.setItem("dark-mode", "enabled"); // Save dark mode preference
    localStorage.setItem("box-toggle", "enabled"); // Save dark mode preference
  } else {
    modeIcon.src = "assets/images/icon-moon.svg"; // Moon icon for light mode
    localStorage.setItem("dark-mode", "disabled"); // Save light mode preference
    localStorage.setItem("box-toggle", "disabled"); // Save light mode preference
  }
});
//ALL Extensions//
inpt = document.getElementsByTagName("input");
allExt.addEventListener("click", () => {
  allExt.classList.toggle("ext-btn");
  activeExt.classList.remove("ext-btn");
  inactiveExt.classList.remove("ext-btn");
  for (let i = 0; i < boxx.length; i++) {
    boxx[i].style.display = "block";
  }
});

//ACTIVE Filter//
activeExt.addEventListener("click", () => {
  activeExt.classList.toggle("ext-btn");
  allExt.classList.remove("ext-btn");
  inactiveExt.classList.remove("ext-btn");
  for (let i = 0; i < boxx.length; i++) {
    if (inpt[i].checked === false) {
      boxx[i].style.display = "none";
    } else boxx[i].style.display = "block";
  }
});

//INACTIVE Filter//

inactiveExt.addEventListener("click", () => {
  inactiveExt.classList.toggle("ext-btn");
  activeExt.classList.remove("ext-btn");
  allExt.classList.remove("ext-btn");
  for (let i = 0; i < boxx.length; i++) {
    if (inpt[i].checked === true) {
      boxx[i].style.display = "none";
    } else {
      boxx[i].style.display = "block";
    }
  }
});

//Removing Extention
// Add click event to each remove button
for (let i = 0; i < remove.length; i++) {
  remove[i].addEventListener("click", function () {
    // Find the closest parent ext-box and hide it
    this.closest(".ext-box").remove();
  });
}
