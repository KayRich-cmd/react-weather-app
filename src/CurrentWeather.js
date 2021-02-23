import React from "react";

export default function CurrentWeather() {
  let weatherData = {
    temperature: 30,
    description: "Clear",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
  };

  return (
    <div className="row current-conditions">
      <div className="col-5">
        <span className="current-weather current-weather-icon">
          <img src={weatherData.imgUrl} alt={weatherData.description} />
        </span>

        <span className="current-weather">{weatherData.temperature}</span>
        <span className="unit-type">
          <a href="/">°C</a> |<a href="/">°F</a>
        </span>
      </div>
    </div>
  );
}
