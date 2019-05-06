import "./DailyForecast.scss";
import React from "react";
import {
  ForecastDaily,
  weatherDaily
} from "../../interfaces/Forecast.interface";

interface DayProps {
  forecast: any;
}

class Day extends React.PureComponent<DayProps> {
  render() {
    return (
      <button className="daily-forecast-button">
        <div className="daily-forecast-day">tuesday</div>
        <div className="daily-forecast-col">
          <div className="daily-forecast-humidity">icon humidity</div>
          <div className="daily-forecast-precip">icon precip mm</div>
        </div>
        <div className="daily-forecast-col">
          <div className="daily-forecast-wind-icon">icon</div>
          <div className="daily-forecast-wind">
            windSpeed<span>m/s</span>
          </div>
        </div>
        <div className="daily-forecast-col">
          <div className="daily-forecast-weather-icon">icon</div>
          <div className="daily-forecast-temperature">tempMax</div>
        </div>
      </button>
    );
  }
}

class DailyForecast extends React.PureComponent<ForecastDaily> {
  render() {
    //let dailyData = this.createModel(rawData);
    // const {
    //         humidity,
    //         precip,
    //         windDirection,
    //         windSpeed,
    //         weatherIcon,
    //         tempMax,
    //         tempMin
    //       } = this.props;
    console.log(this.props.forecast);
    return (
      <div className="daily-forecast">
        {/* <Day /> */}
        {this.props.forecast.data.map(day => (
          <Day forecast={day} />
        ))}
      </div>
    );
  }
}

export default DailyForecast;
