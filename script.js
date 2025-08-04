// This is a to-do app where the user will add, update, and display tasks
document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add tasks
    function addTask() {
        const taskText = taskInput.value.trim();

        // Check if the input is empty
        if (taskText === "") {
            alert("Enter a task");
            return;
        }

        // Create <li> element and set its content
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create remove button
        const button = document.createElement('button');
        button.textContent = 'Remove';
        button.className = 'remove-btn';

        // Add click event to remove the task
        button.onclick = function () {
            taskList.removeChild(li);
        };

        // Append button to li, and li to task list
        li.appendChild(button);
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    }

    // Add event listener to the button
    addButton.addEventListener('click', addTask);

    // Allow pressing "Enter" to add tasks
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});