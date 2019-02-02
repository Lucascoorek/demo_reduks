import React, { Component } from "react";
import TodoList from "./TodoList";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <TodoList />
      </div>
    );
  }
}

export default App;
