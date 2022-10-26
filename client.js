// put this on every js page
'use strict';

// create form element variable
// Checkbox
const darkMode = document.querySelector('input[type=checkbox]');
const darkModeLabel = document.querySelector('label[for-dark-mode]');
// Slider
const slider = document.querySelector('input[type=range]');
const root = document.querySelector(':root');

// create body variable
const body = document.querySelector('body');

// creates dark mode function
const toggleDarkMode = function() {

// ----- DARK MODE ------
// if checked === true
  if (darkMode.checked){
    body.classList.replace('light', 'dark');
    darkModeLabel.innerHTML = "Light Mode";
  } else {
    body.classList.replace('dark', 'light');
    darkModeLabel.innerHTML = "Dark Mode";

  }
}

// ----- HUE SLIDER ------
const handleSlider = function () {
// Set variable on inline style
  root.style.setProperty("--hue", slider.value);
}


// ----- DARK MODE ------
// creates event listener --------  function vv
darkMode.addEventListener('click', toggleDarkMode);


// ----- HUE SLIDER ------
slider.addEventListener('input', handleSlider);
