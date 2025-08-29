// Variables to store selected units
const massInput = document.getElementById('mass-input');
const massDropdown = document.getElementById('mass-dropdown');
const resultDropdown = document.getElementById('result-dropdown');

function setupDropdown(dropdownId, defaultValue) {
    const dropdown = document.getElementById(dropdownId);
    const selected = dropdown.querySelector('.dropdown-selected');
    const options = dropdown.querySelector('.dropdown-options');
    const items = options.querySelectorAll('li');

    // Set default value on load
    selected.dataset.value = defaultValue;

    // Toggle dropdown visibility
    selected.addEventListener('click', () => {
        const isOpen = options.style.display === 'block';
        document.querySelectorAll('.dropdown-options').forEach(opt => opt.style.display = 'none');
        options.style.display = isOpen ? 'none' : 'block';
    });

    // Handle selecting an option
    items.forEach(item => {
        item.addEventListener('click', () => {
            selected.textContent = item.textContent;
            selected.dataset.value = item.dataset.value;
            options.style.display = 'none';
        });
    });

    // Close dropdown if clicked outside
    document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) {
            options.style.display = 'none';
        }
    });
}

// Setup both dropdowns with default values
setupDropdown('mass-dropdown', 'Kilograms');
setupDropdown('result-dropdown', 'Pounds');

// Function for Convert Button
function convertMass() {
    const inputValue = parseFloat(massInput.value);
    const fromUnit = massDropdown.querySelector('.dropdown-selected').dataset.value;
    const toUnit = resultDropdown.querySelector('.dropdown-selected').dataset.value;
    let result;

    if (isNaN(inputValue)) {
        document.getElementById('res-value').textContent = 'Please enter a valid number';
        return;
    }

    // Convert input to kilograms first (base unit)
    let kilogramsValue;
    switch (fromUnit) {
        case 'Kilograms':
            kilogramsValue = inputValue;
            break;
        case 'Grams':
            kilogramsValue = inputValue / 1000;
            break;
        case 'Milligrams':
            kilogramsValue = inputValue / 1000000;
            break;
        case 'Pounds':
            kilogramsValue = inputValue * 0.453592;
            break;
        case 'Ounces':
            kilogramsValue = inputValue * 0.0283495;
            break;
        case 'Tons':
            kilogramsValue = inputValue * 907.185;
            break;
        default:
            document.getElementById('res-value').textContent = 'Invalid input unit';
            return;
    }

    // Convert kilograms to target unit
    switch (toUnit) {
        case 'Kilograms':
            result = kilogramsValue;
            break;
        case 'Grams':
            result = kilogramsValue * 1000;
            break;
        case 'Milligrams':
            result = kilogramsValue * 1000000;
            break;
        case 'Pounds':
            result = kilogramsValue / 0.453592;
            break;
        case 'Ounces':
            result = kilogramsValue / 0.0283495;
            break;
        case 'Tons':
            result = kilogramsValue / 907.185;
            break;
        default:
            document.getElementById('res-value').textContent = 'Invalid result unit';
            return;
    }

    // Format the result
    const formattedResult = `${result.toFixed(6)} ${getUnitAbbreviation(toUnit)}`;
    document.getElementById('res-value').textContent = formattedResult;
}

// Helper function to get unit abbreviation
function getUnitAbbreviation(unit) {
    switch (unit) {
        case 'Kilograms': return 'kg';
        case 'Grams': return 'g';
        case 'Milligrams': return 'mg';
        case 'Pounds': return 'lb';
        case 'Ounces': return 'oz';
        case 'Tons': return 't';
        default: return '';
    }
}

// Event listener for Convert button
document.getElementById('convert-btn').addEventListener('click', convertMass);

// Allow pressing Enter key to trigger conversion
massInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        convertMass();
    }
});