let todos = [
  { id: 1, text: 'Learn React', completed: false, userId: 1, username: 'alice' },
  { id: 2, text: 'Build a Todo App', completed: false, userId: 2, username: 'bob' },
  { id: 3, text: 'Deploy to Vercel', completed: true, userId: 1, username: 'alice', completedDate: '2023-10-01' },
];


const pendingTodosList = document.getElementById('pending-todos');
const completedTodosList = document.getElementById('completed-todos');
const filterUserSelect = document.getElementById('filter-user');
const sortPendingSelect = document.getElementById('sort-pending');
const sortCompletedSelect = document.getElementById('sort-completed');

function renderTodos() {
  const filterUserId = filterUserSelect.value;
  const sortPendingOrder = sortPendingSelect.value;
  const sortCompletedOrder = sortCompletedSelect.value;

  const filteredTodos = todos.filter(todo => 
    filterUserId === 'all' || todo.userId === parseInt(filterUserId)
  );

  const pendingTodos = filteredTodos.filter(todo => !todo.completed);
  const completedTodos = filteredTodos.filter(todo => todo.completed);

  const sortedPendingTodos = [...pendingTodos].sort((a, b) => 
    sortPendingOrder === 'asc' 
      ? a.text.localeCompare(b.text) 
      : b.text.localeCompare(a.text)
  );

  const sortedCompletedTodos = [...completedTodos].sort((a, b) => 
    sortCompletedOrder === 'newest' 
      ? new Date(b.completedDate) - new Date(a.completedDate) 
      : new Date(a.completedDate) - new Date(b.completedDate)
  );

  pendingTodosList.innerHTML = sortedPendingTodos.map(todo => `
    <li class="todo-item">
      <span>${todo.text}</span>
      <span class="meta">${todo.username}</span>
      <button onclick="toggleTodo(${todo.id})">Complete</button>
    </li>
  `).join('');

  completedTodosList.innerHTML = sortedCompletedTodos.map(todo => `
    <li class="todo-item">
      <span>${todo.text}</span>
      <span class="meta">${todo.username} | Completed: ${todo.completedDate}</span>
      <button onclick="toggleTodo(${todo.id})">Uncomplete</button>
    </li>
  `).join('');
}
window.toggleTodo = function(id) {
  todos = todos.map(todo => 
    todo.id === id 
      ? { 
          ...todo, 
          completed: !todo.completed,
          completedDate: !todo.completed ? new Date().toISOString().split('T')[0] : undefined
        } 
      : todo
  );
  renderTodos();
};

filterUserSelect.addEventListener('change', renderTodos);
sortPendingSelect.addEventListener('change', renderTodos);
sortCompletedSelect.addEventListener('change', renderTodos);

renderTodos();