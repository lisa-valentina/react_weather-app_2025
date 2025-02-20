import "./WeatherApp.css";
import Footer from "./Footer";
import SearchEngine from "./SearchEngine";
import CurrentWeather from "./CurrentWeather";
import WeatherForecast from "./WeatherForecast";

export default function WeatherApp() {
  return (
    <div className="WeatherApp">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <SearchEngine />

            <div className="col-9">
              <CurrentWeather />
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
