import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="container">
      <div className="row weather">
        <div className="col">
          Sunday
          <br />
          Mostly cloudy <br />
          12° 8°
          <br />
          Monday
          <br />
          Mostly cloudy
          <br />
          16° 5°
          <br />
          Tuesday
          <br />
          Cloudy
          <br />
          17° 11°
        </div>

        <div className="col-1 icons-left">
          <br />
          <i className="fa-solid fa-cloud-sun weather-icons"></i>
          <br />
          <br />
          <i className="fa-solid fa-cloud-sun weather-icons"></i>
          <br />
          <br />
          <i className="fa-solid fa-cloud weather-icons"></i> <br />
        </div>
        <div className="col-1 weather-border icons-right">
          <br />
          <i className="fa-solid fa-cloud-rain weather-icons"></i>
          <br />
          <br />
          <i className="fa-solid fa-cloud-sun weather-icons"></i>
          <br />
          <br />
          <i className="fa-solid fa-cloud-sun weather-icons"></i> <br />
        </div>
        <div className="col weather-forecast">
          Wednesday
          <br />
          Showers
          <br />
          14° 8° <br />
          Thursday
          <br />
          Partly cloudy <br />
          14° 6°
          <br />
          Friday
          <br />
          Partly cloudy
          <br />
          13° 5°
        </div>
      </div>
    </div>
  );
}
