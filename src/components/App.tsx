import React, { Component } from "react";
import _get from "lodash/get";
import { getForecast } from "../utils/api";
import { ThemeContext, themes } from "./Themes/theme-context";
import { AppBackground } from "./AppBackground/";
import { Menu } from "./Menu/";
import { Search } from "./Search/";
import { Spinner } from "./LoadingAnimation/";
import { CurrentForecast } from "./CurrentForecast/";
import { DailyForecast } from "./DailyForecast/";
import {
  ForecastCurrentStructure,
  ForecastDailyStructure,
  MenuStructure,
  Themes
} from "./App.interface";
import "./App.scss";

interface Props {}

interface State {
  currentForecastData: ForecastCurrentStructure;
  dailyForecastData: ForecastDailyStructure;
  menu: MenuStructure;
  isLoading: boolean;
  city: string;
  dayTime: boolean;
  error: boolean;
  theme: Themes;
  toggleTheme(): void;
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
      menu: {
        isMenuOpen: false,
        isButtonSimple: true,
        isButtonTheme: false
      },
      isLoading: true,
      city: "Kyiv, UA",
      dayTime: true,
      error: false,
      theme: themes.light,
      toggleTheme: this.toggleTheme
    };
  }

  componentDidMount() {
    this.onSubmit(this.state.city);
  }

  toggleTheme() {
    this.setState(state => ({
      theme: state.theme === themes.dark ? themes.light : themes.dark
    }));
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
    console.log(data);
    if (data[0] === "error") {
      console.log("error");
      this.setState({ error: true });
    } else {
      let cityName = _get(data[0], "city_name");
      let countryСode = _get(data[0], "country_code");
      let city = `${cityName}, ${countryСode}`;
      let currentTimeRaw = _get(data[0].data[0], "timestamp_local");
      let currentForecastData = data[0];
      let dailyForecastData = this.removeFirstDay(data[1]);
      let currentTime = this.getTime(currentTimeRaw);
      this.setState({
        currentForecastData: currentForecastData,
        dailyForecastData: dailyForecastData,
        isLoading: false,
        city: city,
        dayTime: currentTime > 6 && currentTime < 18 ? true : false,
        error: false
      });
    }
  };

  turnOnLoading = () => {
    this.setState({
      isLoading: true
    });
  };

  getTime(date: string): number {
    let newDate = new Date(date);
    return newDate.getHours();
  }

  menuButtonSimple = () => {
    this.setState(prevState => ({
      menu: {
        ...this.state.menu,
        isButtonSimple: !prevState.menu.isButtonSimple
      }
    }));
  };

  menuButtonTheme = () => {
    this.toggleTheme();
  };

  render() {
    return (
      <div className="app">
        <ThemeContext.Provider value={this.state}>
          <AppBackground dayTime={this.state.dayTime} />
          <Menu
            toggleButtonSimple={this.menuButtonSimple}
            toggleButtonTheme={this.menuButtonTheme}
            isButtonSimple={this.state.menu.isButtonSimple}
            isButtonTheme={this.state.menu.isButtonTheme}
          />
          <Search
            onSubmit={this.onSubmit}
            onChange={this.onSearchChange}
            city={this.state.city}
            turnOnLoading={this.turnOnLoading}
          />
          {this.state.error ? (
            <div className="app-error">City not found</div>
          ) : (
            <>
              {this.state.isLoading ? (
                <Spinner />
              ) : (
                <>
                  <CurrentForecast forecast={this.state.currentForecastData} />
                  <DailyForecast
                    forecast={this.state.dailyForecastData}
                    isSimpleMode={this.state.menu.isButtonSimple}
                  />
                </>
              )}
            </>
          )}
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;
