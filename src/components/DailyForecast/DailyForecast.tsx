import "./DailyForecast.scss";
import React from "react";
import { ForecastDaily } from "./DailyForecast.interface";

import Day from "./Day";

import { getWindIcon } from "../../utils/getWeatherIcon";

interface ForecastDetailsProps {
  displayMode: boolean;
  forecast: any;
}

class ForecastDetails extends React.PureComponent<ForecastDetailsProps> {
  render() {
    const { rh, precip, wind_dir, wind_spd } = this.props.forecast;
    console.log(this.props.displayMode);
    return (
      <div className="daily-forecast-block">
        {this.props.displayMode ? (
          <>
            <div className="daily-forecast-col">
              <div className="daily-forecast-humidity" />
              <div className="daily-forecast-precip" />
            </div>
            <div className="daily-forecast-col">
              <div className="daily-forecast-wind-icon" />
              <div className="daily-forecast-wind" />
            </div>
          </>
        ) : (
          <>
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
          </>
        )}
      </div>
    );
  }
}

class DailyForecast extends React.PureComponent<ForecastDaily> {
  render() {
    return (
      <div className="daily-forecast">
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
    );
  }
}

export default DailyForecast;
