import React, { Component } from "react";
import { getForecast } from "../utils/api";
import { AppBackground } from "./AppBackground/";
import { Search } from "./Search/";
import "./App.scss";

class App extends Component {
  state = {
    data: [],
    city: "Kyiv, UA"
  };
  async componentDidMount() {
    this.onSubmit(this.state.city);
  }

  onSubmit = async (city: string) => {
    let data = await getForecast(city);
    this.setState({ data: data });
    console.log(this.state.data);
  };

  render() {
    return (
      <div className="app">
        <AppBackground />
        <Search submit={this.onSubmit} />
      </div>
    );
  }
}

export default App;
