import { render } from "react-dom";
import React, { Component } from "react";

class App extends Component {
    render() {
      return <div>Hello</div>
    }
}
export default App;

const container = document.getElementById("app");
render(<App />, container);