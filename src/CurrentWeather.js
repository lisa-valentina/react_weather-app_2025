import React from "react";
import DateTime from "./DateTime";
import UnitConversion from "./UnitConversion";

import "./CurrentWeather.css";

export default function CurrentWeather(props) {
  return (
    <div className="CurrentWeather">
      <div className="row">
        <div className="col-3 weather-today">
          <UnitConversion celsius={props.weatherData.celsiusTemp} />
          <span className="currentDescription text-capitalize">
            {props.weatherData.weatherDescription}
          </span>{" "}
          <br />
          feels like {Math.round(props.weatherData.feelsCelsiusTemp)}
          <span className="maxTemp"></span> °
          <span className="divider-2">|</span>
          <span className="minTemp"></span> °
        </div>{" "}
        <div className="col-2 ">
          <img src={props.weatherData.icon} className="weather-icon-today" />
        </div>
        <div className="col-4">
          <h1>{props.weatherData.city}</h1>
          <h3>
            <DateTime date={props.weatherData.date} />
          </h3>
        </div>
        <div className="col-3 weather-details">
          <br />
          Precipitation <span className="precipitation"></span> %<br />
          Humidity <span className="humidity"></span>
          {props.weatherData.humidity} %<br />
          Wind <span className="wind"></span>
          {Math.round(props.weatherData.wind * 3.6)} km/h <br />
        </div>
      </div>
    </div>
  );
}
