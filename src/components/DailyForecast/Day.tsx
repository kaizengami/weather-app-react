import React from "react";
import { weatherDaily } from "../App.interface";
import { getWeatherIcon, getWindIcon } from "../../utils/getWeatherIcon";

interface DayProps {
  forecast: weatherDaily;
}

class Day extends React.PureComponent<DayProps> {
  getDate(date: string): string {
    let newDate = new Date(date);
    return newDate.toLocaleString("en-us", { weekday: "long" });
  }

  render() {
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
                style={{ transform: getWindIcon(wind_dir) }}
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

export default Day;
