// Variables
const calculateBtn = document.getElementById('calculateBtn');
const bmiValue = document.getElementById('bmi-value');
const bmiCategory = document.getElementById('bmi-category');
const bmiImage = document.querySelector('#img-section img');

// Function to calculate BMI
function calculateBMI() {
    let height = parseFloat(document.getElementById('height').value);
    height /= 100; // Convert cm to m
    const weight = parseFloat(document.getElementById('weight').value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        alert('Please enter valid height and weight values.');
        return;
    }

    const bmi = weight / (height ** 2);
    bmiValue.textContent = bmi.toPrecision(2);

    let category = '';
    let imgSrc = '';

    if (bmi < 18.5) {
        category = 'Underweight';
        imgSrc = '/Media Folder/Under-weight.png';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
        imgSrc = '/Media Folder/Normal-weight.png';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
        imgSrc = '/Media Folder/Over-weight.png';
    } else {
        category = 'Obesity';
        imgSrc = '/Media Folder/Obese-weight.png';
    }

    bmiCategory.textContent = category;
    bmiImage.src = imgSrc;
    bmiImage.alt = category;
}

// Event listener for calculate button
calculateBtn.addEventListener('click', calculateBMI);
