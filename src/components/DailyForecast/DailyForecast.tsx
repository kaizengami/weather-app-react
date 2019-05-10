import "./DailyForecast.scss";
import React from "react";
import { ForecastDaily } from "./DailyForecast.interface";

import Day from "./Day";

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
