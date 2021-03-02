import React, { useState } from "react";
import axios from "axios";
import "./CurrentWeather.css";

export default function CurrentWeather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: response.data.main.temp,
      wind: 2,
      city: response.data.name,
    });
    setReady(true);
  }

  if (ready) {
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
        <span>{Math.round(weatherData.temperature)}°</span>
        <span className="unit-type">
          <a href="/">C</a> |<a href="/"> F</a>
        </span>
      </div>
    );
  } else {
    const apiKey = "2e85ceac5b7aab61ec3567d2389a4fd2";
    let city = "New York";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
