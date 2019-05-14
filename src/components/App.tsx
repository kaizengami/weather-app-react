import React, { Component } from "react";
import _get from "lodash/get";
import { getForecast } from "../utils/api";
import { ThemeContext, themes } from "./Themes/theme-context";
import { AppBackground } from "./AppBackground/";
import { Menu } from "./Menu/";
import { Search } from "./Search/";
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
  city: string;
  error: boolean;
  theme: Themes;
  toggleTheme: any;
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.toggleTheme = () => {
      this.setState(state => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark
      }));
    };

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
      city: "Kyiv, UA",
      error: false,
      theme: themes.light,
      toggleTheme: this.toggleTheme
    };
  }

  componentDidMount() {
    this.onSubmit(this.state.city);
  }

  toggleTheme() {}

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
      let cityName = _get(data[0], "city_name");
      let countryСode = _get(data[0], "country_code");
      let city = `${cityName}, ${countryСode}`;
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

  menuButtonSimple = () => {
    this.setState(prevState => ({
      menu: {
        ...this.state.menu,
        isButtonSimple: !prevState.menu.isButtonSimple
      }
    }));
    console.log("menuButtonSimple");
  };

  menuButtonTheme = () => {
    console.log("menuButtonTheme");
  };

  render() {
    return (
      <div className="app">
        <ThemeContext.Provider value={this.state}>
          <AppBackground />
          <Menu
            onClickButtonSimple={this.menuButtonSimple}
            onClickButtonTheme={this.menuButtonTheme}
            isButtonSimple={this.state.menu.isButtonSimple}
            isButtonTheme={this.state.menu.isButtonTheme}
          />
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
              <DailyForecast
                forecast={this.state.dailyForecastData}
                isSimpleMode={this.state.menu.isButtonSimple}
              />
            </>
          )}
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;
