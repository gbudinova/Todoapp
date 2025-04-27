import React from 'react';
import { useTodos } from './hooks/useTodos';
import TodoList from './components/TodoList/TodoList';
import FilterControls from './components/FilterControls/FilterControls';
import SortControls from './components/SortControls/SortControls';
import './App.css';

function App() {
  const {
    todos,
    users,
    loading,
    error,
    selectedUserId,
    setSelectedUserId,
    uncompletedSort,
    setUncompletedSort,
    completedSort,
    setCompletedSort,
  } = useTodos();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const uncompletedTodos = todos.filter(todo => !todo.completed);
  const completedTodos = todos.filter(todo => todo.completed);

  return (
    <div className="app-container">
      <div className="controls-container">
        <FilterControls 
          users={users} 
          selectedUserId={selectedUserId} 
          onUserChange={setSelectedUserId} 
        />
      </div>
      
      <div className="todos-container">
        <div className="uncompleted-todos">
          <h2>Uncompleted Todos</h2>
          <SortControls 
            sortType="uncompleted" 
            currentSort={uncompletedSort} 
            onSortChange={setUncompletedSort} 
          />
          <TodoList 
            todos={uncompletedTodos} 
            isCompletedList={false} 
          />
        </div>
        
        <div className="completed-todos">
          <h2>Completed Todos</h2>
          <SortControls 
            sortType="completed" 
            currentSort={completedSort} 
            onSortChange={setCompletedSort} 
          />
          <TodoList 
            todos={completedTodos} 
            isCompletedList={true} 
          />
        </div>
      </div>
    </div>
  );
}

export default App;