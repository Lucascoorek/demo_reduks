import React, { Component } from "react";
import Todo from "./Todo";
import { connect } from "react-redux";
// import { ADD_TODO, REMOVE_TODO } from "./ActionCreators";
import { addTodo, removeTodo } from "./ActionCreators";
import NewTodoForm from "./NewTodoForm";
import { Route } from "react-router-dom";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ""
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }
  handleAdd(val) {
    this.props.addTodo(val);
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
        <Route
          path="/todos/new"
          component={props => (
            <NewTodoForm {...props} handleSubmit={this.handleAdd} />
          )}
        />
        <Route exact path="/todos" component={() => <div>{todos}</div>} />
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
