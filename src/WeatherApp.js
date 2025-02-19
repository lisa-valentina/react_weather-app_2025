import "./WeatherApp.css";
import Footer from "./Footer";
import SearchEngine from "./SearchEngine";
import CurrentWeather from "./CurrentWeather";
import WeatherForecast from "./WeatherForecast";

export default function WeatherApp() {
  return (
    <div className="WeatherApp">
      Weather app
      <SearchEngine />
      <CurrentWeather />
      <WeatherForecast />
      <Footer />
    </div>
  );
}
