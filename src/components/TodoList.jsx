import React, { Component } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';


class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{
        id: '52467845',
        newTodo: 'Add a new todo',
        isCompleted: false,
        isEditing: false
      },
      {
        id: '52467848',
        newTodo: 'Mark it as completed',
        isCompleted: true,
        isEditing: false
      },
      {
        id: '72867845',
        newTodo: '... Edit it',
        isCompleted: false,
        isEditing: false
      },
      {
        id: '58467875',
        newTodo: '... or just delete it',
        isCompleted: false,
        isEditing: false
      }
      
      ],
    };
    this.addTodo = this.addTodo.bind(this)
    this.removeTodo = this.removeTodo.bind(this)
    this.editTodo = this.editTodo.bind(this)
  }

  addTodo(item) {
    this.setState({
      todos:[...this.state.todos, item]})  
  }

  removeTodo(id){
    this.setState({
      todos: this.state.todos.filter(t => t.id !== id)
    });

  }

  editTodo(id, editedTodo){
   console.log(id, editedTodo);
   const updatedTodos = this.state.todos.map(todo => {
    if (todo.id === id) {
      return { ...todo, newTodo: editedTodo };
    }
    return todo;
  });
  this.setState({ todos: updatedTodos });

  }
 

  render() {
    return (
      <section>
        <main className="TodoList">
          <div>
            <ul>
              {this.state.todos.map(todo => (
                <TodoItem 
                key={todo.id}
                id={todo.id} 
                todo={todo.newTodo} 
                isCompleted={todo.isCompleted}
                isEditing={todo.isEditing}
                editTodo={this.editTodo}
                removeTodo={this.removeTodo}
                />
              ))}
            </ul>
          </div>
        </main>
        <TodoForm addTodo={this.addTodo}/>
      </section>
    );
  }
}

export default TodoList;
