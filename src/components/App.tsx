import React, { Component } from "react";
import { getForecast } from "../utils/api";
import { AppBackground } from "./AppBackground/";
import { Search } from "./Search/";
import { CurrentForecast } from "./CurrentForecast/";
import { DailyForecast } from "./DailyForecast/";
import "./App.scss";

class App extends Component {
  state = {
    data: [],
    currentForecastData: [],
    dailyForecastData: [],
    city: "Kyiv, UA"
  };

  componentDidMount() {
    this.onSubmit(this.state.city);
  }

  onSubmit = async (city: string) => {
    let data = await getForecast(city);
    this.setState({ data: data });
    console.log(this.state.data[0]);
  };

  render() {
    return (
      <div className="app">
        <AppBackground />
        <Search onSubmit={this.onSubmit} />
        <CurrentForecast data={this.state.data[0]} />
        <DailyForecast data={this.state.data[1]} />
      </div>
    );
  }
}

export default App;
