import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';

const TodoList = ({ todos, isCompletedList }) => {
  return (
    <div className="todo-list">
      {todos.length > 0 ? (
        todos.map(todo => (
          <TodoItem 
            key={todo.id} 
            todo={todo} 
            isCompleted={isCompletedList} 
          />
        ))
      ) : (
        <p>No todos found</p>
      )}
    </div>
  );
};

export default TodoList;
