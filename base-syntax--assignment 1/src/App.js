import React, { Component } from "react";
import "./App.css";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  state = {
    name: "Sam",
  };

  nameChangedHandler = (event) => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <UserInput
          changed={this.nameChangedHandler}
          currentName={this.state.name}
        ></UserInput>
        <UserOutput username={this.state.name}></UserOutput>
      </div>
    );
  }
}

export default App;
 