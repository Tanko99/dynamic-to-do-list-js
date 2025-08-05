 document.addEventListener('DOMContentLoaded', () => {
      const addButton = document.getElementById('add-task-btn');
      const taskInput = document.getElementById('task-input');
      const taskList = document.getElementById('task-list');

      // Load tasks from Local Storage on page load
      loadTasks();

      // Add task when button is clicked
      addButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
          alert("Enter a task");
          return;
        }
        addTask(taskText, true);
        taskInput.value = "";
      });

      // Allow adding task with Enter key
      taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
          addButton.click();
        }
      });

      // Load tasks from localStorage and add them to the list
      function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // Don't save again
      }

      // Add task to DOM and optionally save to Local Storage
      function addTask(taskText, save = true) {
        const li = document.createElement('li');
        li.textContent = taskText;

        const button = document.createElement('button');
        button.textContent = 'Remove';
        button.className = 'remove-btn';

        // Handle task removal
        button.addEventListener('click', () => {
          taskList.removeChild(li);
          removeTask(taskText);
        });

        li.appendChild(button);
        taskList.appendChild(li);

        // Save task if needed
        if (save) {
          const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
          storedTasks.push(taskText);
          localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }
      }

      // Remove task from localStorage
      function removeTask(taskText) {
        let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
      }
    });
