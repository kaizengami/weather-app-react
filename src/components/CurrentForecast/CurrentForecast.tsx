import "./CurrentForecast.scss";
import React from "react";
import { ForecastCurrent } from "./CurrentForecast.interface";

class CurrentForecast extends React.PureComponent<ForecastCurrent> {
  getDate(date: string): string {
    let newDate = new Date(date);
    return newDate.toLocaleString("en-us", { weekday: "long" });
  }

  render() {
    if (this.props.forecast.data.length) {
      const temp_now: number = this.props.forecast.data[0].temp;
      const timestamp_local: string = this.props.forecast.data[0]
        .timestamp_local;
      return (
        <div className="current-forecast">
          <div className="current-forecast-temperature">
            {Math.round(temp_now)}
          </div>
          <div className="current-forecast-day">
            {this.getDate(timestamp_local)}
          </div>
        </div>
      );
    } else {
      return <div>not found</div>;
    }
  }
}

export default CurrentForecast;
