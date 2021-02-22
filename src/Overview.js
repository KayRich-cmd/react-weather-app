import React from "react";

import "./Overview.css";

export default function Overview() {
  let weatherData = {
    city: "Sydney, AUS",
    date: "Wednesday @ 01:16",
    description: "Perpetually Sunny Here",
  };

  return (
    <div className="Overview">
      <ul>
        <li>
          <h1>{weatherData.city}</h1>
        </li>
        <li>{weatherData.description}</li>
        <li>
          <small>Last Updated On: {weatherData.date}</small>
        </li>
      </ul>
    </div>
  );
}
