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
      city: "Kyiv, UA",
      error: false
    };
  }

  componentDidMount() {
    this.onSubmit(this.state.city);
  }

  onSubmit = async (city: string) => {
    let data: any = await getForecast(city);
    console.log(data);
    if (data[0] === "error") {
      console.log("error");
      this.setState({ error: true });
    } else {
      let city = `${data[0].city_name}, ${data[0].country_code}`;
      this.setState({
        currentForecastData: data[0],
        dailyForecastData: data[1],
        city: city,
        error: false
      });
    }
  };

  render() {
    return (
      <div className="app">
        <AppBackground />
        <Search onSubmit={this.onSubmit} city={this.state.city} />
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
