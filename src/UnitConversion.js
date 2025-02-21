import react, { useState } from "react";
import "./UnitConversion.css";

export default function UnitConversion(props) {
  const [unit, setUnit] = useState("celsius");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "celsius") {
    return (
      <div className="UnitConversion">
        <span className="currentDegrees"> {Math.round(props.celsius)} </span>
        <span>
          {" "}
          °C |
          <button className="fahrenheit" onClick={convertToFahrenheit}>
            °F
          </button>
        </span>
      </div>
    );
  } else {
    let fahrenheit = Math.round((props.celsius * 9) / 5 + 32);
    return (
      <div className="UnitConversion">
        {fahrenheit}
        <button className="celsius" onClick={showCelsius}>
          °C
        </button>
        | °F
      </div>
    );
  }
}
