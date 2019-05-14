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
                render={(isSimpleMode: boolean) => (
                  <ForecastDetails displayMode={isSimpleMode} forecast={day} />
                )}
                isSimpleMode={this.props.isSimpleMode}
              />
            ))}
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default DailyForecast;
