import React from "react";
import "./style.css";

export default class App extends React.Component {
  state = {
    todoTitle: "",
    todoList: []
  };

  render() {
    return (
      <div>
        <center>
          <form
            onSubmit={event => {
              event.preventDefault();
              this.setState(
                {
                  todoList: [...this.state.todoList, this.state.todoTitle]
                },
                () => {
                  console.log(this.state.todoList);
                }
              );
            }}
          >
            <input
              type="text"
              autocomplete="off"
              class="form-control"
              name="todoInput"
              placeholder="Enter todo"
              onChange={event => {
                this.setState({ todoTitle: event.target.value });
                // console.log(event.target.value);
              }}
              style={{ width: "400px", height: "50px" }}
            />
            <input type="submit" value="Submit" id="submitButton" />
          </form>
        </center>
        <h4>todo list: </h4>

        {this.state.todoList.length ? (
          <ol>
            {this.state.todoList.map(todo => (
              <li>{todo}</li>
            ))}
          </ol>
        ) : (
          <p>todo list is empty, add some tasks...</p>
        )}
      </div>
    );
  }
}
