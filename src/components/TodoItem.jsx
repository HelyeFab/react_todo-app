import React, { Component } from 'react';
import { capitalise } from '../helpers/helperFunctions.js';

let editIcon = 'fas fa-pencil-alt';
let deleteIcon = 'fas fa-trash-alt';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editedTodo: '',
      isCompleted: this.props.isCompleted,
      isEditing: this.props.isEditing,
    };
    this.handleChange=this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
  })
  }

  handleUpdate(e) {
    e.preventDefault();
    this.props.editTodo(this.props.id, this.state.editedTodo);
    this.setState({ isEditing: false });

  }

  toggleCompletion() {
    this.setState({ isCompleted: !this.state.isCompleted });
  }

  handleEdit() {
    this.setState({ isEditing: !this.state.isEditing });
    this.props.editTodo(this.props.id, this.state.isEditing);
  }

  handleRemove() {
    this.props.removeTodo(this.props.id);
  }

  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <form className='TodoEdit_form' onSubmit={this.handleUpdate}>
        <input
          type='text'
          value={this.state.editedTodo}
          name='editedTodo'
          onChange={this.handleChange}
        />
        <button>Save</button>
      </form>
      );
    } else {
      result = (
        <div className="TodoItem_Container">
          <div className="TodoItem_task">
            <li
              className={this.state.isCompleted ? 'isCompleted' : ''}
              onClick={this.toggleCompletion}
            >
              {capitalise(this.props.todo)}
            </li>
          </div>
          <div className="TodoItem_Icons">
            <i onClick={this.handleEdit} className={editIcon}></i>
            <i onClick={this.handleRemove} className={deleteIcon}></i>
          </div>
        </div>
      );
    }
    return (
    <div>
      {result}
    </div>);
  }
}

export default TodoItem;
