import React, { useState } from "react";
import CurrentWeather from "./CurrentWeather";
import axios from "axios";

import "./SearchEngine.css";
import WeatherForecast from "./WeatherForecast";

export default function SearchEngine(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [newCity, setNewCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      celsiusTemp: response.data.temperature.current,
      feelsCelsiusTemp: response.data.temperature.feels_like,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      weatherDescription: response.data.condition.description,
      icon: response.data.condition.icon_url,
      date: new Date(response.data.time * 1000),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleNewCity(event) {
    setNewCity(event.target.value);
  }

  function search() {
    const apiKey = "242e181ca0a34d6a4t3befc66o8e43fa";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${newCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="SearchEngine row">
        <form id="search-city" onSubmit={handleSubmit}>
          <input
            type="search"
            id="city-input"
            placeholder="Change city..."
            autoFocus
            onChange={handleNewCity}
          />
        </form>
        <br />
        <CurrentWeather weatherData={weatherData} />
        <WeatherForecast defaultCity={weatherData.city} />
      </div>
    );
  } else {
    search();
    return "loading...";
  }
}
