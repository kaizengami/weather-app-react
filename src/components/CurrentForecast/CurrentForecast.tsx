import "./CurrentForecast.scss";
import React from "react";
import { ForecastCurrent } from "../../interfaces/Forecast.interface";

class CurrentForecast extends React.PureComponent<ForecastCurrent> {
  getDate(date: string) {
    let newDate = new Date(date);
    return newDate.toLocaleString("en-us", { weekday: "long" });
  }

  render() {
    return (
      <>
        {this.props.forecast.data.length ? (
          <div className="current-forecast">
            <div className="current-forecast-temperature">
              {Math.round(this.props.forecast.data[0].temp)}
            </div>
            <div className="current-forecast-day">
              {this.getDate(this.props.forecast.data[0].timestamp_local)}
            </div>
          </div>
        ) : (
          <div>not found</div>
        )}
      </>
    );

    // console.log("current forecast " + this.props.data);
    // return (
    //   <div className="current-forecast">
    //     <div className="current-forecast-temperature">18</div>
    //     <div className="current-forecast-day">Monday</div>
    //   </div>
    // );
  }
}

export default CurrentForecast;
