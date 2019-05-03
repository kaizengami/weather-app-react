import "./DailyForecast.scss";
//import DailyForecastModel from './Model';
import React from "react";

interface Props {
  data: any;
}

class Day extends React.PureComponent {
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

class DailyForecast extends React.PureComponent<Props> {
  // createModel(data) {
  //   const dailyData = data[1].data;
  //   let DailyForecastData = dailyData.map(day => new DailyForecastModel(day));
  //   return DailyForecastData;
  // }

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
    return (
      <div className="daily-forecast">
        <Day />
        {/* {this.props.data.map(day => <Day data={...day}/> )} */}
      </div>
    );
  }
}

export default DailyForecast;
