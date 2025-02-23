import react from "react";

export default function DateForecast(props) {
  let date = new Date(props.day * 1000);
  let dayForecast = date.getDay();
  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let weekday = weekdays[dayForecast];
  return <div>{weekday}</div>;
}
