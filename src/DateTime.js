import react from "react";

export default function DateTime(props) {
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = months[props.date.getMonth()];
  let year = props.date.getFullYear();
  let day = props.date.getDate();
  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let weekday = weekdays[props.date.getDay()];
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div>
      {day} {month} {year}
      <br />
      {weekday} {hours}:{minutes}
    </div>
  );
}
