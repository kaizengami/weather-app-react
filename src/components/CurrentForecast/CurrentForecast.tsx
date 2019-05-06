import "./CurrentForecast.scss";
import React from "react";
import { Forecast } from "../../interfaces/Forecast.interface";

class CurrentForecast extends React.PureComponent<Forecast> {
  render() {
    return (
      <>
        {this.props.forecast.data.length ? (
          <div className="current-forecast">
            <div className="current-forecast-temperature">
              {this.props.forecast.data[0].app_temp}
            </div>
            <div className="current-forecast-day">Monday</div>
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
