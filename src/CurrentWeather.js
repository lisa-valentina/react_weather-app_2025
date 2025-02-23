import React from "react";
import DateTime from "./DateTime";
import UnitConversion from "./UnitConversion";

import "./CurrentWeather.css";

export default function CurrentWeather(props) {
  return (
    <div>
      <div className="row">
        <div className="col-3 weather-today">
          <UnitConversion
            celsius={props.weatherData.celsiusTemp}
            feelsLike={props.weatherData.feelsCelsiusTemp}
          />
          <span className="text-capitalize">
            {props.weatherData.weatherDescription}
          </span>{" "}
        </div>{" "}
        <div className="col-2 ">
          <img
            src={props.weatherData.icon}
            className="weather-icon-today"
            alt={props.weatherData.weatherDescription}
          />
        </div>
        <div className="col-4">
          <h1>{props.weatherData.city}</h1>
          <h3>
            <DateTime date={props.weatherData.date} />
          </h3>
        </div>
        <div className="col-3 weather-details">
          <br />
          <br />
          Humidity <span></span>
          {props.weatherData.humidity} %<br />
          Wind <span></span>
          {Math.round(props.weatherData.wind * 3.6)} km/h <br />
        </div>
      </div>
    </div>
  );
}
