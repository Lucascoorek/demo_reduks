import React, { Component } from "react";
class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(this.state.task);
    e.target.reset();
    this.props.history.push("/todos");
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
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
    );
  }
}
export default NewTodoForm;
