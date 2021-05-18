import React, { Component } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Test from "./components/Test";

export default class App extends Component {
  // constructor(props){
  //   super(props)
  //   this.state={
  //     name:"Islem",
  //     age:25,
  //   }
  // }

  state = {
    name: "slim",
    person: {
      name: "Aymen",
      email: "aymen@gmail.com",
    },
    count: 0,
    // Myinput: "",
    arr: ["slim", "islem"],
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  // HandelChange = (x) => {
  //   this.setState({ Myinput: x });
  // };

  add = (x) => {
    this.setState({
      arr: [...this.state.arr, x],
    });
  };

  render() {
    const { name, person, count } = this.state;
    return (
      <div className="App">
        {/* <h2>{name}</h2> */}
        {/* <h2>{this.state.age}</h2> */}
        {/* <h3>{person.name}</h3>
        <h3>{person.email}</h3> */}
        {/* <Counter x={count} />
        <button onClick={this.myInput
          }}
        >
          -
        </button> */}
        {/* <Test HandelChange={this.HandelChange} add={this.add} /> */}
        <Test add={this.add} />
        {/* <h1>{this.state.Myinput}</h1> */}
        {this.state.arr.map((el) => (
          <h2>{el}</h2>
        ))}
      </div>
    );
  }
}
