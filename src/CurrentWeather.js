import React from "react";
import "./CurrentWeather.css";

export default function CurrentWeather() {
  return (
    <div className="CurrentWeather">
      <div className="row">
        <div className="col-3 weather-today">
          <span className="currentDegrees"></span>
          <button className="celsius">°C</button>
          <span className="divider-1">|</span>
          <button className="fahrenheit">°F</button>
          <br />
          <span className="currentDescription">Cloudy</span> <br />
          <span className="maxTemp"></span> °
          <span className="divider-2">|</span>
          <span className="minTemp"></span> °
        </div>{" "}
        <div className="col-2 weather-icon">
          <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png" />
        </div>
        <div className="col-4">
          <h1>Current City</h1>
          <h3>
            <div>Current Date</div>
            <div>Current Time </div>
          </h3>
        </div>
        <div className="col-3 weather-details">
          <br />
          Precipitation <span className="precipitation"></span> %<br />
          Humidity <span className="humidity"></span> %<br />
          Wind <span className="wind"></span> km/h <br />
        </div>
      </div>
    </div>
  );
}
