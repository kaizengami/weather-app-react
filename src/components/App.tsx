import React, { Component } from "react";
import { getForecast } from "../utils/api";
import { AppBackground } from "./AppBackground/";
import { Search } from "./Search/";
import { CurrentForecast } from "./CurrentForecast/";
import { DailyForecast } from "./DailyForecast/";
import {
  ForecastCurrentStructure,
  ForecastDailyStructure
} from "../interfaces/Forecast.interface";
import "./App.scss";

interface Props {}

interface State {
  currentForecastData: ForecastCurrentStructure;
  dailyForecastData: ForecastDailyStructure;
  city: string;
  error: boolean;
}

class App extends Component<Props, State> {
  constructor(props: Props) {
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
      city: "Kyiv, UA",
      error: false
    };
  }

  componentDidMount() {
    this.onSubmit(this.state.city);
  }

  removeFirstDay(forecast: any) {
    forecast.data.shift();
    return forecast;
  }

  onSearchChange = (value: string) => {
    this.setState({ city: value });
  };

  onSubmit = async (city: string) => {
    let data: any = await getForecast(city);
    if (data[0] === "error") {
      console.log("error");
      this.setState({ error: true });
    } else {
      let city = `${data[0].city_name}, ${data[0].country_code}`;
      let currentForecastData = data[0];
      let dailyForecastData = this.removeFirstDay(data[1]);
      this.setState({
        currentForecastData: currentForecastData,
        dailyForecastData: dailyForecastData,
        city: city,
        error: false
      });
    }
  };

  render() {
    return (
      <div className="app">
        <AppBackground />
        <Search
          onSubmit={this.onSubmit}
          onChange={this.onSearchChange}
          city={this.state.city}
        />
        {this.state.error ? (
          <div className="app-error">City not found</div>
        ) : (
          <>
            <CurrentForecast forecast={this.state.currentForecastData} />
            <DailyForecast forecast={this.state.dailyForecastData} />
          </>
        )}
      </div>
    );
  }
}

export default App;
