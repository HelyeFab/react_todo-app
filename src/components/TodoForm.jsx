import React, { Component } from 'react';
import { v4 } from 'uuid';

class TodoForm extends Component {
    constructor(props){
        super(props);
        this.state = {newTodo:""}
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.addTodo({...this.state, id: v4(), isCompleted: false, isEditing: false})
        this.setState({ newTodo: "" });
    }

  render() {
    return (
      <div className="TodoForm">
      <span>New Todo</span>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor=""></label>
          <div className="TodoForm_blockInput">
            <input 
            type="text"
            name="newTodo"
            value={this.state.newTodo}
            placeholder="what is going to be...?"
            onChange={this.handleChange} />
            <button>Add Todo</button>
          </div>
        </form>
      </div>
    );
  }
}

export default TodoForm;
