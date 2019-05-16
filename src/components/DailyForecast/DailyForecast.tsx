import "./DailyForecast.scss";
import React from "react";
import { ForecastDaily } from "./DailyForecast.interface";
import ForecastDetails from "./ForecastDetails";
import { ThemeContext } from "../Themes/theme-context";
import Day from "./Day";

class DailyForecast extends React.PureComponent<ForecastDaily> {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <div
            className="daily-forecast"
            style={{ backgroundColor: theme.dailyForecast.background }}
          >
            {this.props.forecast.data.map(day => (
              <Day
                forecast={day}
                key={day.datetime}
                renderForecastDetails={() => (
                  <ForecastDetails
                    isSimpleMode={this.props.isSimpleMode}
                    forecast={day}
                  />
                )}
              />
            ))}
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default DailyForecast;
