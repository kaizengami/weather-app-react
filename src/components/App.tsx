import React, { Component } from "react";
import { getForecast } from "../utils/api";
import "./App.scss";

class App extends Component {
  async componentDidMount() {
    //const data = await getForecast("kyiv");
    //console.log(data);
  }

  render() {
    return <div>Rendered</div>;
  }
}

export default App;
