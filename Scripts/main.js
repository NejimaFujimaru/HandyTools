// Variables to store button elements
const lengthConBtn = document.getElementById('length-con');
const bmiCalBtn = document.getElementById('bmi-cal');
const tempConBtn = document.getElementById('temp-con');
const seeMoreBtn = document.getElementsByClassName('see-more-tools');

// Event listeners for navigation buttons
lengthConBtn.addEventListener('click', () => {
    window.location.href = '/Pages/Tools/Length-Unit-Converter.html';
});
bmiCalBtn.addEventListener('click', () => {
    window.location.href = '/Pages/Tools/BMI-Calculator.html';
});
tempConBtn.addEventListener('click', () => {
    window.location.href = '/Pages/Tools/Temperature-Converter.html';
});

seeMoreBtn[0].addEventListener('click', () => {
    window.location.href = '/Pages/Tools.html';
});
