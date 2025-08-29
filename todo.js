// Select DOM elements
const todoInput = document.getElementById('todo-input');
const addTaskBtn = document.getElementById('add-todo-btn');
const todoList = document.getElementById('todo-list');
const clearCompletedBtn = document.getElementById('clear-completed-btn');
const clearAllBtn = document.getElementById('clear-all-btn');

// Function to create a new task item
function createTaskItem(taskText = todoInput.value.trim()) {
    if (!taskText) return; // prevent empty tasks

    const li = document.createElement('li');
    li.className = 'task-item';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.innerHTML = '<i class=""></i>';   
    checkbox.className = 'task-checkbox';

    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';

    // Event listener for checkbox to toggle completed state
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            span.style.textDecoration = 'line-through';
            span.style.color = '#888';
            li.classList.add('completed-task');
        } else {
            span.style.textDecoration = 'none';
            span.style.color = '#464646';
            li.classList.remove('completed-task');
        }
        storeList(); // update localStorage
    });

    // Event listener for delete button to remove task
    deleteBtn.addEventListener('click', () => {
        todoList.removeChild(li);
        storeList(); // update localStorage
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);

    storeList(); // save new task

    return li;
}

// Event listener for adding a new task
addTaskBtn.addEventListener('click', () => {
    createTaskItem();
    todoInput.value = ''; // clear input after adding
});

// Allow pressing Enter to add a task
todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        createTaskItem();
        todoInput.value = '';
    }
});

// Store the list in local storage
function storeList() {
    const tasks = [];
    document.querySelectorAll('.task-item').forEach(task => {
        tasks.push({
            text: task.querySelector('.task-text').textContent,
            completed: task.querySelector('.task-checkbox').checked
        });
    });
    localStorage.setItem('todoList', JSON.stringify(tasks));
}

// Load the list from local storage
function loadList() {
    const tasks = JSON.parse(localStorage.getItem('todoList')) || [];
    tasks.forEach(task => {
        const li = createTaskItem(task.text);
        li.querySelector('.task-checkbox').checked = task.completed;
        if (task.completed) {
            li.classList.add('completed-task');
            li.querySelector('.task-text').style.textDecoration = 'line-through';
        }
    });
}

// Event listener for clearing completed tasks
clearCompletedBtn.addEventListener('click', () => {
    document.querySelectorAll('.completed-task').forEach(task => {
        todoList.removeChild(task);
    });
    storeList(); // update localStorage
});

// Event listener for clearing all tasks
clearAllBtn.addEventListener('click', () => {
    todoList.innerHTML = '';
    localStorage.removeItem('todoList'); // clear localStorage too
});

// Load the list on page load
window.addEventListener('load', loadList);
