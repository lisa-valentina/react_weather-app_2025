import react from "react";
import "./WeatherApp.css";

import SearchEngine from "./SearchEngine";
import CurrentWeather from "./CurrentWeather";
import WeatherForecast from "./WeatherForecast";
import Footer from "./Footer";

export default function WeatherApp() {
  return (
    <div className="WeatherApp">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <SearchEngine />

            <div className="col">
              <CurrentWeather defaultCity="New York" />
            </div>
          </div>
          <br />
          <br />

          <WeatherForecast />
        </div>
      </div>
      <Footer />
    </div>
  );
}
