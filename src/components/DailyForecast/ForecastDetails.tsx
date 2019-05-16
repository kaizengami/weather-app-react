import React from "react";
import { ForecastDetailsProps } from "./ForecastDetails.interface";
import { getWindIcon } from "../../utils/getWeatherIcon";

class ForecastDetails extends React.PureComponent<ForecastDetailsProps> {
  render() {
    const { rh, precip, wind_dir, wind_spd } = this.props.forecast;
    return (
      <div className="daily-forecast-block">
        {this.props.isSimpleMode ? (
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

export default ForecastDetails;
