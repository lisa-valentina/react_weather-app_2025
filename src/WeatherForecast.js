import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import DateForecast from "./DateForecast";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState({ ready: false });
  const [weatherForecast, setWeatherForecast] = useState(null);

  function handleResponse(response) {
    setWeatherForecast(response.data.daily);
    setLoaded({ ready: true });
  }

  useEffect(() => {
    setLoaded({ ready: false });
  }, [props.coordinates]);

  if (loaded.ready) {
    return (
      <div className="container">
        <div className="row weather">
          <div className="col-4">
            <DateForecast day={weatherForecast[1].time} />
            <div className="text-capitalize">
              {weatherForecast[1].condition.description}
            </div>
            {Math.round(weatherForecast[1].temperature.minimum)}°{" "}
            {Math.round(weatherForecast[1].temperature.maximum)}°
          </div>
          <div className="col-2">
            <img
              src={weatherForecast[1].condition.icon_url}
              className="icons-left"
              alt={weatherForecast[1].condition.description}
            />
          </div>
          <div className="col-2 weather-border">
            <img
              src={weatherForecast[4].condition.icon_url}
              className="icons-right"
              alt={weatherForecast[4].condition.description}
            />
          </div>
          <div className="col-4 weather-right">
            <DateForecast day={weatherForecast[4].time} />
            <div className="text-capitalize">
              {" "}
              {weatherForecast[4].condition.description}
            </div>
            {Math.round(weatherForecast[4].temperature.minimum)}°{" "}
            {Math.round(weatherForecast[4].temperature.maximum)}°{" "}
          </div>
        </div>
        <div className="row weather">
          <div className="col-4">
            <DateForecast day={weatherForecast[2].time} />
            <div className="text-capitalize">
              {" "}
              {weatherForecast[2].condition.description}
            </div>
            {Math.round(weatherForecast[2].temperature.minimum)}°{" "}
            {Math.round(weatherForecast[2].temperature.maximum)}°
          </div>
          <div className="col-2">
            <img
              src={weatherForecast[2].condition.icon_url}
              className="icons-left"
              alt={weatherForecast[2].condition.description}
            />
          </div>
          <div className="col-2 weather-border">
            <img
              src={weatherForecast[5].condition.icon_url}
              className="icons-right"
              alt={weatherForecast[5].condition.description}
            />
          </div>
          <div className="col-4 weather-right">
            <DateForecast day={weatherForecast[5].time} />
            <div className="text-capitalize">
              {" "}
              {weatherForecast[5].condition.description}
            </div>
            {Math.round(weatherForecast[5].temperature.minimum)}°{" "}
            {Math.round(weatherForecast[5].temperature.maximum)}°
          </div>
        </div>
        <div className="row weather">
          <div className="col-4">
            <DateForecast day={weatherForecast[3].time} />
            <div className="text-capitalize">
              {" "}
              {weatherForecast[3].condition.description}
            </div>
            {Math.round(weatherForecast[3].temperature.minimum)}°{" "}
            {Math.round(weatherForecast[3].temperature.maximum)}°
          </div>
          <div className="col-2">
            <img
              src={weatherForecast[3].condition.icon_url}
              className="icons-left"
              alt={weatherForecast[3].condition.description}
            />
          </div>
          <div className="col-2 weather-border">
            <img
              src={weatherForecast[6].condition.icon_url}
              className="icons-right"
              alt={weatherForecast[6].condition.description}
            />
          </div>
          <div className="col-4 weather-right">
            <DateForecast day={weatherForecast[6].time} />
            <div className="text-capitalize">
              {" "}
              {weatherForecast[6].condition.description}
            </div>
            {Math.round(weatherForecast[6].temperature.minimum)}°{" "}
            {Math.round(weatherForecast[6].temperature.maximum)}°{" "}
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "242e181ca0a34d6a4t3befc66o8e43fa";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return <div>loading...</div>;
  }
}
