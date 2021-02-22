import React from "react";

import "./OtherDescription.css";

export default function OtherDescription() {
  let weatherData = {
    humidity: 40,
    wind: 3,
  };
  return (
    <div className="OtherDescription">
      <div className="col-4">
        <ul>
          <li>
            <span className="other-description-label"> Humidity:</span>
            <span>{weatherData.humidity}%</span>
          </li>
          <li>
            <span className="other-description-label"> Wind Speed:</span>
            <span>{weatherData.wind}</span> km/h
          </li>
        </ul>
      </div>
    </div>
  );
}
