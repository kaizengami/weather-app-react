import "./CurrentForecast.scss";
import React from "react";

interface Props {
  //data: any;
  data: {
    data: ReadonlyArray<weather>;
  };
  //data:
  //city_name: string;
  //country_code: string;
}

interface weather {
  app_temp: string;
}

// interface weatherData {
//   data: ReadonlyArray<weather>
// }

class CurrentForecast extends React.PureComponent<Props> {
  render() {
    console.table(this.props.data);
    return (
      <>
        {this.props.data ? (
          <div className="current-forecast">
            <div className="current-forecast-temperature">
              {this.props.data.data[0].app_temp}
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
