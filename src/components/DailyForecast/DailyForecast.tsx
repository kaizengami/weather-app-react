import "./DailyForecast.scss";
import React from "react";
import {
  ForecastDaily,
  weatherDaily
} from "../../interfaces/Forecast.interface";
import { getWeatherIcon, getWindIcon } from "../../utils/getWeatherIcon";

interface DayProps {
  forecast: weatherDaily;
}

class Day extends React.PureComponent<DayProps> {
  getDate(date: string): string {
    let newDate = new Date(date);
    return newDate.toLocaleString("en-us", { weekday: "long" });
  }

  getWindIcon(degree: number): string {
    return "rotateZ(" + degree + "deg)";
  }

  render() {
    console.log(this.props.forecast);
    const {
      rh,
      precip,
      wind_dir,
      wind_spd,
      weather: { code },
      max_temp,
      min_temp,
      datetime
    } = this.props.forecast;
    return (
      <button className="daily-forecast-button">
        <div className="daily-forecast-day">{this.getDate(datetime)}</div>
        <div className="daily-forecast-block">
          <div className="daily-forecast-col">
            <div className="daily-forecast-humidity">
              <i className="wi wi-raindrop" /> {Math.round(rh)} %
            </div>
            <div className="daily-forecast-precip">
              <i className="wi wi-raindrops" /> {Math.round(precip)} mm
            </div>
          </div>
          <div className="daily-forecast-col">
            <div className="daily-forecast-wind-icon">
              <i
                className="wi wi-wind-direction"
                style={{ transform: this.getWindIcon(wind_dir) }}
              />
            </div>
            <div className="daily-forecast-wind">
              {Math.round(wind_spd)}
              <span>m/s</span>
            </div>
          </div>
        </div>
        <div className="daily-forecast-col">
          <div className="daily-forecast-weather-icon">
            <i className={"wi " + getWeatherIcon(code)} />
          </div>
          <div className="daily-forecast-temperature">
            {Math.round(max_temp)}
          </div>
        </div>
      </button>
    );
  }
}

class DailyForecast extends React.PureComponent<ForecastDaily> {
  render() {
    return (
      <div className="daily-forecast">
        {this.props.forecast.data.map(day => (
          <Day forecast={day} key={day.datetime} />
        ))}
      </div>
    );
  }
}

export default DailyForecast;
