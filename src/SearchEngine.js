import React from "react";
import "./SearchEngine.css";

export default function SearchEngine() {
  return (
    <div className="SearchEngine row">
      <form id="search-city">
        <input type="search" id="city-input" placeholder="Change city..." />
      </form>
      <br />
    </div>
  );
}
