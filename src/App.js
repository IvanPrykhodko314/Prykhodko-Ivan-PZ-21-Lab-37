import React, { Component } from "react";

function App() {
  return (
    <div>
      <UserInfo name="Ivan" email="someemail@gafsfg.com" />
      <UserInfo name="Mariia" email="someemail2@gafsfg.com" />
      <UserInfo name="Kostya" email="someemail3@gafsfg.com" />
      <Counter />
      <ToDoList />
    </div>
  );
}

function UserInfo(props) {
  return <h1>Name of a uset: {props.name}. Email: {props.email}</h1>;
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  makeless = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h2>Лічильник: {this.state.count}</h2>
        <button onClick={this.increment}>Збільшити</button>
        <button onClick={this.makeless}>Зменшити</button>
      </div>
    );
  }
}

function ToDoApp(props) {
  return (
    <div>
      <h2>To Do:</h2>
      <ul>
        <li>{props.task1}</li>
        <li>{props.task2}</li>
        <li>{props.task3}</li>
      </ul>
    </div>
  );
}

function ToDoList() {
  return (
    <ToDoApp
      task1="Вступ"
      task2="Основна частина"
      task3="Завершення"
    />
  );
}

export default App;
