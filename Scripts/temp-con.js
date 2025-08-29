// Variables to store selected units
const tempInput = document.getElementById('temp-input');
const tempDropdown = document.getElementById('temp-dropdown');
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
    document.querySelectorAll('.dropdown-options').forEach(opt => opt.style.display = 'none'); // close others
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
setupDropdown('temp-dropdown', 'Celsius');
setupDropdown('result-dropdown', 'Kelvin');

// Function for Convert Button
function convertTemperature() {
  const inputValue = parseFloat(tempInput.value);
  const fromUnit = tempDropdown.querySelector('.dropdown-selected').dataset.value;
  const toUnit = resultDropdown.querySelector('.dropdown-selected').dataset.value;
  let result;

  if (isNaN(inputValue)) {
    document.getElementById('res-value').textContent = 'Please enter a valid number';
    return;
  }

  // Convert input to Celsius first
  let celsiusValue;
  switch (fromUnit) {
    case 'Celsius':
      celsiusValue = inputValue;
      break;
    case 'Fahrenheit':
      celsiusValue = (inputValue - 32) * 5 / 9;
      break;
    case 'Kelvin':
      celsiusValue = inputValue - 273.15;
      break;
    default:
      document.getElementById('res-value').textContent = 'Invalid input unit';
      return;
  }

  // Convert Celsius to target unit
  switch (toUnit) {
    case 'Celsius':
      result = celsiusValue;
      break;
    case 'Fahrenheit':
      result = (celsiusValue * 9 / 5) + 32;
      break;
    case 'Kelvin':
      result = celsiusValue + 273.15;
      break;
    default:
      document.getElementById('res-value').textContent = 'Invalid result unit';
      return;
  }

  // Format the result based on the unit
  let formattedResult;
  if (toUnit === 'Kelvin') {
    formattedResult = `` + `${result.toFixed(2)} K`;
  } else {
    formattedResult = `` + `${result.toFixed(2)} °${toUnit.charAt(0)}`;
  }
  
  document.getElementById('res-value').textContent = formattedResult;
}

// Event listener for Convert button
document.getElementById('convert-btn').addEventListener('click', convertTemperature);

// Allow pressing Enter key to trigger conversion
tempInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    convertTemperature();
  }
});
