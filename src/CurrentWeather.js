import React, { useState } from "react";
import axios from "axios";
import "./CurrentWeather.css";

export default function CurrentWeather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [date, setDate] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.city,
      celsiusTemp: response.data.temperature.current,
      feelsCelsiusTemp: response.data.temperature.feels_like,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      weatherDescription: response.data.condition.description,
      icon: response.data.condition.icon_url,
    });
    setDate({
      month: response.data.time,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="CurrentWeather">
        <div className="row">
          <div className="col-3 weather-today">
            <span className="currentDegrees">
              {Math.round(weatherData.celsiusTemp)}
            </span>
            <button className="celsius">°C</button>
            <span className="divider-1">|</span>
            <button className="fahrenheit">°F</button>
            <br />
            <span className="currentDescription text-capitalize">
              {weatherData.weatherDescription}
            </span>{" "}
            <br />
            feels like {Math.round(weatherData.feelsCelsiusTemp)}
            <span className="maxTemp"></span> °
            <span className="divider-2">|</span>
            <span className="minTemp"></span> °
          </div>{" "}
          <div className="col-2 ">
            <img src={weatherData.icon} className="weather-icon" />
          </div>
          <div className="col-4">
            <h1>{weatherData.city}</h1>
            <h3>
              <div>Current Date {date.month}</div>
              <div>Current Time </div>
            </h3>
          </div>
          <div className="col-3 weather-details">
            <br />
            Precipitation <span className="precipitation"></span> %<br />
            Humidity <span className="humidity"></span>
            {weatherData.humidity} %<br />
            Wind <span className="wind"></span>
            {Math.round(weatherData.wind * 3.6)} km/h <br />
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "242e181ca0a34d6a4t3befc66o8e43fa";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "loading...";
  }
}
