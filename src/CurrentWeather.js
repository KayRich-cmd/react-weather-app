import React, { useState } from "react";
import axios from "axios";
import "./CurrentWeather.css";

export default function CurrentWeather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  return (
    <div className="CurrentWeather">
      <div className="row">
        <div className="col-12">
          <img
            src="https://ssl.gstatic.com/onebox/weather/48/sunny.png"
            alt="Sunny"
          />
        </div>
      </div>
      <span>3°</span>
      <span className="unit-type">
        <a href="/">C</a> |<a href="/"> F</a>
      </span>
    </div>
  );
}
