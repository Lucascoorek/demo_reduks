import React, { Component } from "react";
import Todo from "./Todo";
import { connect } from "react-redux";
import { addTodo, removeTodo } from "./ActionCreators";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.addTodo(this.state.task);
    e.target.reset();
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  removeTodo(id) {
    // debugger;
    this.props.removeTodo(id);
  }
  render() {
    // debugger;
    let todos = this.props.todos.map((val, index) => (
      <Todo
        key={index}
        task={val.task}
        removeTodo={this.removeTodo.bind(this, val.id)}
      />
    ));
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task">
            Task:
            <input
              type="text"
              name="task"
              id="task"
              onChange={this.handleChange}
            />
          </label>
          <button>Add Todo</button>
        </form>
        <ul>{todos}</ul>
      </div>
    );
  }
}
function mapStateToProps(reduxState) {
  // debugger;
  return {
    todos: reduxState.todos
  };
}

export default connect(
  mapStateToProps,
  { addTodo, removeTodo }
)(TodoList);
