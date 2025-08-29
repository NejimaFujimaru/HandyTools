
// Variables to store selected units
const lengthInput = document.getElementById('length-input');
const lengthDropdown = document.getElementById('length-dropdown');
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
setupDropdown('length-dropdown', 'Meters');
setupDropdown('result-dropdown', 'Kilometers');

// Function for Convert Button
function convertLength() {
    const inputValue = parseFloat(lengthInput.value);
    const fromUnit = lengthDropdown.querySelector('.dropdown-selected').dataset.value;
    const toUnit = resultDropdown.querySelector('.dropdown-selected').dataset.value;
    let result;

    if (isNaN(inputValue)) {
        document.getElementById('res-value').textContent = 'Please enter a valid number';
        return;
    }

    // Convert input to meters first (base unit)
    let metersValue;
    switch (fromUnit) {
        case 'Meters':
            metersValue = inputValue;
            break;
        case 'Kilometers':
            metersValue = inputValue * 1000;
            break;
        case 'Centimeters':
            metersValue = inputValue / 100;
            break;
        case 'Millimeters':
            metersValue = inputValue / 1000;
            break;
        case 'Miles':
            metersValue = inputValue * 1609.34;
            break;
        case 'Yards':
            metersValue = inputValue * 0.9144;
            break;
        case 'Feet':
            metersValue = inputValue * 0.3048;
            break;
        case 'Inches':
            metersValue = inputValue * 0.0254;
            break;
        default:
            document.getElementById('res-value').textContent = 'Invalid input unit';
            return;
    }

    // Convert meters to target unit
    switch (toUnit) {
        case 'Meters':
            result = metersValue;
            break;
        case 'Kilometers':
            result = metersValue / 1000;
            break;
        case 'Centimeters':
            result = metersValue * 100;
            break;
        case 'Millimeters':
            result = metersValue * 1000;
            break;
        case 'Miles':
            result = metersValue / 1609.34;
            break;
        case 'Yards':
            result = metersValue / 0.9144;
            break;
        case 'Feet':
            result = metersValue / 0.3048;
            break;
        case 'Inches':
            result = metersValue / 0.0254;
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
        case 'Meters': return 'm';
        case 'Kilometers': return 'km';
        case 'Centimeters': return 'cm';
        case 'Millimeters': return 'mm';
        case 'Miles': return 'mi';
        case 'Yards': return 'yd';
        case 'Feet': return 'ft';
        case 'Inches': return 'in';
        default: return '';
    }
}

// Event listener for Convert button
document.getElementById('convert-btn').addEventListener('click', convertLength);

// Allow pressing Enter key to trigger conversion
lengthInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        convertLength();
    }
});
