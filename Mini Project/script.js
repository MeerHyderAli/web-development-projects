document.addEventListener('DOMContentLoaded', function () {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => addTaskToList(task));
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const task = { text: taskText, completed: false };
        addTaskToList(task);
        saveTasks();
        taskInput.value = '';
    }
}

function addTaskToList(task) {
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.textContent = task.text;
    if (task.completed) {
        li.classList.add('completed');
    }

    
    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.addEventListener('click', function () {
        li.classList.toggle('completed');
        saveTasks();
    });

    
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', function () {
        li.remove();
        saveTasks();
    });

    li.appendChild(completeBtn);
    li.appendChild(removeBtn);

    taskList.appendChild(li);
}


function saveTasks() {
    const tasks = [];
    document.querySelectorAll('#taskList li').forEach(li => {
        tasks.push({
            text: li.textContent,
            completed: li.classList.contains('completed')
        });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
