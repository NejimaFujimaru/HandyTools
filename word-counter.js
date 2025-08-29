const inputTextArea = document.getElementById("text-input");
const countButton = document.getElementById("countBtn");
const clearButton = document.getElementById("clearBtn");
const wordCount = document.getElementById("word-count");
const charCount = document.getElementById("char-count");

function countWordsAndChars() {
    const text = inputTextArea.value.trim();
    const words = text ? text.split(/\s+/) : [];
    wordCount.textContent = words.length;
    charCount.textContent = text.length;
}

function clearText() {
    inputTextArea.value = "";
    wordCount.textContent = "0";
    charCount.textContent = "0";
}

clearButton.addEventListener('click' , clearText);
countButton.addEventListener('click', countWordsAndChars);

