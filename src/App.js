import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [showTodo, setShowTodo] = useState(true);
  return (
    <div className="App">
      {showTodo ? <TodoApp /> : <div>TOdo not available</div>}
      <button onClick={(e) => setShowTodo[!showTodo]}>ShowHideTodo</button>
    </div>
  );
}

class TodoApp extends React.Component {
  constructor(props) {
    console.log("Constructor");
    super(props);
    this.state = { input: "", tasks: [] };
  }

  componentDidMount() {
    console.log("Component Mounted");
  }

  componentDidUpdate() {
    console.log("Component Updated");
  }

  componentWillUnmount() {
    console.log("Component Unmount");
  }

  render() {
    console.log("render");
    return (
      <div>
        <h1>Todo App </h1>
        <form>
          <label>Create Task</label>

          <input
            className="text"
            placeholder="Add a text here..."
            value={this.state.input}
            onChange={(e) => {
              this.setState({ ...this.state, input: e.target.value });
            }}
          />

          <button
            className="Add-button"
            onClick={(e) => {
              e.preventDefault();
              if (this.state.input) {
                this.setState({
                  ...this.state,
                  tasks: [...this.state.tasks, this.state.input],
                  input: ""
                });
              } else {
                alert("please provide valid input...");
              }
            }}
          >
            Add
          </button>
        </form>
        <h2>List</h2>
        <ul>
          {this.state.tasks.map((task) => (
            <li>{task}</li>
          ))}
        </ul>
      </div>
    );
  }
}
