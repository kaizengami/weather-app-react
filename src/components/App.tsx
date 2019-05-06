import React, { Component } from "react";
import { getForecast } from "../utils/api";
import { AppBackground } from "./AppBackground/";
import { Search } from "./Search/";
import { CurrentForecast } from "./CurrentForecast/";
import { DailyForecast } from "./DailyForecast/";
import { ForecastStructure } from "../interfaces/Forecast.interface";
import "./App.scss";

interface Props {}

interface State {
  currentForecastData: ForecastStructure;
  dailyForecastData: ForecastStructure;
  city: string;
}

class App extends Component<Props, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      currentForecastData: {
        data: [],
        city_name: "",
        country_code: "",
        timezone: ""
      },
      dailyForecastData: {
        data: [],
        city_name: "",
        country_code: "",
        timezone: ""
      },
      city: "Kyiv, UA"
    };
  }

  componentDidMount() {
    this.onSubmit(this.state.city);
  }

  onSubmit = async (city: string) => {
    let data = await getForecast(city);
    this.setState({ currentForecastData: data[0], dailyForecastData: data[1] });
    console.log(this.state.dailyForecastData);
    console.log(this.state.currentForecastData);
  };

  render() {
    return (
      <div className="app">
        <AppBackground />
        <Search onSubmit={this.onSubmit} />
        <CurrentForecast forecast={this.state.currentForecastData} />
        <DailyForecast forecast={this.state.dailyForecastData} />
      </div>
    );
  }
}

export default App;
