// ToggleSwitch
const paragraphs = document.querySelectorAll('.paragraph');
const headOne = document.querySelectorAll('h1');
const headTwo = document.querySelectorAll('.home-title');
const toggleSwitch  = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.getElementById('toggle-icon');
const montessori = document.getElementById('montessori');
const aboutSchemas = document.getElementById('about-schemas');
const enveloping = document.getElementById('enveloping');
const trajectory = document.getElementById('trajectory');
const rotation = document.getElementById('rotation');
const contact = document.getElementById('contact');
const boxElem = document.querySelectorAll('.elem');



// Dark or Light Images
function toggleLightDarkMode(isDark) {
    headOne.forEach(h => h.style.color = isDark ? 'rgb(255 255 255)' : 'rgb(0 0 0)');
    headTwo.forEach(h => h.style.color = isDark ? 'rgb(0 0 0)' : 'rgb(255 255 255)');
    paragraphs.forEach(p => p.style.color = isDark ? 'rgb(255 255 255)' : 'rgb(0 0 0)');

    boxElem.forEach(el => el.style.boxShadow = isDark ? '6px 6px 3px rgba(0 0 0 / 100%)' : '2px 2px 4px rgba(0 0 0 / 40%)');
    isDark ? toggleIcon.children[0].classList.replace('fa-sun', 'fa-moon') : toggleIcon.children[0].classList.replace('fa-moon', 'fa-sun');
    toggleIcon.children[0].color = isDark ? 'rgb(0 0 0 / 90%)': 'black';

    montessori.style.backgroundColor = isDark ? 'rgb(0 0 0 / 90%)' : 'var(--navColor2)';
    aboutSchemas.style.backgroundColor = isDark ? 'rgb(0 0 0 / 85%)' : 'var(--navColor3)';
    enveloping.style.backgroundColor = isDark ? 'rgb(0 0 0 / 95%)' : 'var(--navColor4)';
    trajectory.style.backgroundColor = isDark ? 'rgb(0 0 0 / 90%)' : 'var(--navColor6)';
    rotation.style.backgroundColor = isDark ? 'rgb(0 0 0 / 95%)' : 'var(--navColor4)';
    contact.style.backgroundColor = isDark ? 'rgb(0 0 0 / 90%)' : 'var(--navColor5)';
}

// Switch Theme Dynamically
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        toggleLightDarkMode(true);
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme' , 'light');
        toggleLightDarkMode(false);
        localStorage.setItem('theme', 'light');
    }
} 

//Event Listener
toggleSwitch.addEventListener('change', switchTheme);


// Check Local Storage for Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        toggleLightDarkMode(true);
    }
}


