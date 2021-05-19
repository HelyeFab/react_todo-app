import React, { Component } from 'react';
import TodoList from './TodoList';

class TodoScreen extends Component {
  render() {
    return (
      <div className="TodoScreen">
        <div className="heading">
          <h2>Todo List</h2>
          <span>A simple React Todo List App</span>
        </div>
        <div className="Divider"></div>
        <TodoList />
      </div>
    );
  }
}

export default TodoScreen;
