// Variables to store button elements
const lengthConBtn = document.getElementById('length-con');
const bmiCalBtn = document.getElementById('bmi-cal');
const tempConBtn = document.getElementById('temp-con');
const wordConBtn = document.getElementById('word-count');
const todoListBtn = document.getElementById('todo-list');
const massConBtn = document.getElementById('mass-con');

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
wordConBtn.addEventListener('click', () => {
    window.location.href = '/Pages/Tools/Word-Counter.html';
});
todoListBtn.addEventListener('click', () => {
    window.location.href = '/Pages/Tools/Todo-List.html';
});
massConBtn.addEventListener('click', () => {
    window.location.href = '/Pages/Tools/Mass-Unit-Converter.html';
});