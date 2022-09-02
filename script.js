//? Defining constants
// 1. Select and define a constant for the button with an id of "toggleBtn"
const TOGGLEBTN = document.querySelector('#toggleBtn');
// 2. Select and define a constant for the div with a class of "hero-image"
const HEROIMG = document.querySelector('.hero-image');
// 3. Select and define a constant for the h1 with a class of "hero-h1"
const HEROH1 = document.querySelector('.hero-h1');
// 4. Select and define a constant for the checkbox input with a class of "enableToggleCheckbox"
const CHECKBOX = document.querySelector('#enableToggleCheckbox');


//? Toggle the background
// 5. Add an event listener with a type of click and an anonymous callback function to the toggle button
TOGGLEBTN.addEventListener('click', function(){toggleBackground();}, false);
// 6. Inside the callback function, toggle the style background between the image "boy.jpg" and "#40372C"
function toggleBackground() {
    if (HEROIMG.style.backgroundImage == '' || HEROIMG.style.backgroundImage == 'url("boy.jpg")') {
        HEROIMG.style.backgroundImage = 'none';
        HEROIMG.style.backgroundColor = '#40372C';
        HEROH1.innerHTML = "Secret";
    } else {
        HEROIMG.style.backgroundImage = 'url("boy.jpg")';
        HEROIMG.style.backgroundColor = 'transparent';
        HEROH1.innerHTML = "My Hero";
    }
}

// 7. Inside the callback function, toggle the h1 text to say "My Hero" when the background image is shown, and "Secret" when the color is shown
// 8. (Bonus) Add the code to center the background image and prevent the background from repeating


//? Toggle the toggle button
// 9. Add another event listener with a type of change and an anonymous callback function to the checkbox input
CHECKBOX.addEventListener('change', function(){toggleCheckbox();}, false);
// 10. If the checkbox is not checked, enable the disabled attribute on the toggle button
function toggleCheckbox() {
    if (CHECKBOX.checked) {
        TOGGLEBTN.removeAttribute('disabled');
    } else {
        TOGGLEBTN.setAttribute('disabled', 'disabled');
    }
}
// 11. If the checkbox is checked, disable the disabled attribute on the toggle button
