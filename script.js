let todos = JSON.parse(localStorage.getItem('todos')) || [];

function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

function renderTodos() {
  const list = document.getElementById('todo-list');
  const filter = document.getElementById('filter-select').value;
  list.innerHTML = '';

  const filtered = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'uncompleted') return !todo.completed;
    return true;
  });

  filtered.sort((a, b) => new Date(b.date) - new Date(a.date));

  filtered.forEach((todo, index) => {
  const li = document.createElement('li');
  li.className = `todo-item ${todo.completed ? 'completed' : ''}`;

  const isOverdue = todo.deadline && new Date(todo.deadline) < new Date();

  li.innerHTML = `
    <div class="todo-header">
      <span class="todo-text">${todo.text}</span>
      <span class="todo-date">${todo.date}</span>
    </div>
    <div class="todo-deadline ${isOverdue ? 'overdue' : ''}">
      Deadline: ${todo.deadline || 'None'}
    </div>
    <div class="todo-footer">
      <button class="done-btn" onclick="toggleComplete(${index})">
        ${todo.completed ? 'Undone' : 'Done'}
      </button>
      <div class="todo-actions">
        <button onclick="editTodo(${index})" title="Edit">✏️</button>
        <button onclick="deleteTodo(${index})" title="Delete">🗑️</button>
      </div>
    </div>
  `;

    list.appendChild(li);
  });
}

document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('manual-dark');

  const isDark = document.body.classList.contains('manual-dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('manual-dark');
  }
});


function addTodo() {
  const input = document.getElementById('todo-input');
  const deadlineInput = document.getElementById('todo-deadline');
  const text = input.value.trim();
  const deadline = deadlineInput.value; // dạng yyyy-mm-dd

  if (text === '') return;

  const now = new Date();
  const dateStr = now.toLocaleString('en-GB'); // Thời gian tạo

  todos.push({
    text: text,
    completed: false,
    date: dateStr,
    deadline: deadline
  });

  saveTodos();
  renderTodos();

  input.value = '';
  deadlineInput.value = '';
}


function toggleComplete(index) {
  todos[index].completed = !todos[index].completed;
  saveTodos();
  renderTodos();
}

function editTodo(index) {
  const newText = prompt('Edit your task:', todos[index].text);
  if (newText !== null) {
    todos[index].text = newText.trim();
    saveTodos();
    renderTodos();
  }
}

function deleteTodo(index) {
  const list = document.getElementById('todo-list');
  const li = list.children[index];
  li.classList.add('removed');
  setTimeout(() => {
    todos.splice(index, 1);
    saveTodos();
    renderTodos();
  }, 400);
}

document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');

  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('manual-dark');
  }

  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('manual-dark');
    const isDark = document.body.classList.contains('manual-dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
});


