const todoList = document.getElementById('todo-list');
const completedList = document.getElementById('completed-list');
const addTaskButton = document.getElementById('add-task');
const taskInput = document.getElementById('task-input');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

addTaskButton.addEventListener('click', addTask);

function addTask(event) {
    event.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText) {
        const task = { text: taskText, completed: false };
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
        taskInput.value = '';
    }
}

function completeTask(event) {
    const taskListItem = event.target.parentNode;
    const taskIndex = Array.prototype.indexOf.call(todoList.children, taskListItem);
    tasks[taskIndex].completed = true;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}

function renderTasks() {
    todoList.innerHTML = '';
    completedList.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskListItem = document.createElement('li');
        taskListItem.textContent = task.text;
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.addEventListener('click', completeTask);
        taskListItem.appendChild(completeButton);
        if (task.completed) {
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => {
                tasks.splice(index, 1);
                localStorage.setItem('tasks', JSON.stringify(tasks));
                renderTasks();
            });
            taskListItem.appendChild(deleteButton);
            completedList.appendChild(taskListItem);
        } else {
            todoList.appendChild(taskListItem);
        }
    });
}

renderTasks();