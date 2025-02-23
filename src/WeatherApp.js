import React from "react";
import SearchEngine from "./SearchEngine";
import Footer from "./Footer";

import "./WeatherApp.css";

export default function WeatherApp() {
  return (
    <div className="WeatherApp">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col">
              <SearchEngine defaultCity="Paris" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
