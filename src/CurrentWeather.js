import React from "react";
import "./CurrentWeather.css";

export default function CurrentWeather() {
  let weatherData = {
    temperature: 30,
    description: "Clear",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
  };

  return (
    <div className="CurrentWeather">
      <div className="row">
        <div className="col-12">
          <img src={weatherData.imgUrl} alt={weatherData.description} />
        </div>
      </div>
      <span>{weatherData.temperature}°</span>
      <span className="unit-type">
        <a href="/">C</a> |<a href="/"> F</a>
      </span>
    </div>
  );
}
