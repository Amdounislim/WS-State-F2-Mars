import React, { Component } from "react";

export default class Test extends Component {
  state = { myInput: "" };
  render() {
    return (
      <div>
        <input onChange={(e) => this.setState({ myInput: e.target.value })} />
        <button onClick={()=>this.props.add(this.state.myInput)}>ADD</button>
      </div>
    );
  }
}
