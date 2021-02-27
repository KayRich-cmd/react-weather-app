import React from "react";

import "./Forecast.css";

export default function Forecast() {
  let forecastData = {
    imgUrl: {
      hour1: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      hour2: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      hour3: "https://ssl.gstatic.com/onebox/weather/48/sunny.png",
      hour4: "https://ssl.gstatic.com/onebox/weather/48/rain.png",
      hour5: "https://ssl.gstatic.com/onebox/weather/48/rain.png",
    },
    temperature: 3,
    description: "Partly Cloudy",
  };

  return (
    <div className="Forecast">
      <h2>Hourly Forecast</h2>

      <br />
      <table className="table table-borderless">
        <thead>
          <tr>
            <th scope="col">Time 1</th>
            <th scope="col">Time 2</th>
            <th scope="col">Time 3</th>
            <th scope="col">Time 4</th>
            <th scope="col">Time 5</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src={forecastData.imgUrl.hour1}
                alt={forecastData.description}
              />
            </td>
            <td>
              <img
                src={forecastData.imgUrl.hour2}
                alt={forecastData.description}
              />
            </td>
            <td>
              <img
                src={forecastData.imgUrl.hour3}
                alt={forecastData.description}
              />
            </td>
            <td>
              <img
                src={forecastData.imgUrl.hour4}
                alt={forecastData.description}
              />
            </td>
            <td>
              <img
                src={forecastData.imgUrl.hour5}
                alt={forecastData.description}
              />
            </td>
          </tr>
          <tr>
            <td>{forecastData.temperature}°C</td>
            <td>{forecastData.temperature}°C</td>
            <td>{forecastData.temperature}°C</td>
            <td>{forecastData.temperature}°C</td>
            <td>{forecastData.temperature}°C</td>
          </tr>
          <tr>
            <td>{forecastData.description}</td>
            <td>{forecastData.description}</td>
            <td>{forecastData.description}</td>
            <td>{forecastData.description}</td>
            <td>{forecastData.description}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
