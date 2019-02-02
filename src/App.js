import React, { Component } from "react";
import TodoList from "./TodoList";
import { Route, Link, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <p>
          <Link to="/todos">See my todos :)</Link>
        </p>
        <p>
          <Link to="/todos/new">Add new todo</Link>
        </p>
        <Route path="/todos" component={TodoList} />
        <Route exact path="/" render={() => <Redirect to="/todos" />} />
      </div>
    );
  }
}

export default App;
