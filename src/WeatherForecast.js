import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [weatherForecast, setWeatherForecast] = useState({ ready: false });
  const [newCity, setNewCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherForecast({
      ready: true,
      celsiusTemp: response.data.daily.temperature[0],
    });
    alert(`${weatherForecast.celsiusTemp}`);
    forecast();
  }

  function forecast() {
    const apiKey = "242e181ca0a34d6a4t3befc66o8e43fa";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${newCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="container">
      <div className="row weather">
        <div className="col-4">
          Sunday +1 <br />
          Mostly cloudy <br />
          12° 8°
        </div>
        <div className="col-2">
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
            className="icons-left"
          />
        </div>
        <div className="col-2 weather-border">
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
            className="icons-right"
          />
        </div>
        <div className="col-4 weather-right">
          Wednesday +4 <br />
          Mostly cloudy <br />
          12° 8°
        </div>
      </div>
      <div className="row weather">
        <div className="col-4">
          Monday +2 <br />
          Mostly cloudy <br />
          12° 8°
        </div>
        <div className="col-2">
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
            className="icons-left"
          />
        </div>
        <div className="col-2 weather-border">
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
            className="icons-right"
          />
        </div>
        <div className="col-4 weather-right">
          Thursday +5 <br />
          Mostly cloudy <br />
          12° 8°
        </div>
      </div>
      <div className="row weather">
        <div className="col-4">
          Tuesday +3 <br />
          Mostly cloudy <br />
          12° 8°
        </div>
        <div className="col-2">
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
            className="icons-left"
          />
        </div>
        <div className="col-2 weather-border">
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
            className="icons-right"
          />
        </div>
        <div className="col-4 weather-right">
          Friday +6 <br />
          Mostly cloudy <br />
          12° 8°
        </div>
      </div>
    </div>
  );
}
