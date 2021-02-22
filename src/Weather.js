import React from "react";
import Search from "./Search";
import Overview from "./Overview";
import OtherDescription from "./OtherDescription";
import Footer from "./Footer";

import "./styles.css";

export default function Weather() {
  let weatherData = {
    temperature: 30,
    description: "Clear",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
  };

  return (
    <div className="Weather">
      <div className="card card-one-style">
        <div className="card-body">
          <Search />
          <Overview />

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

            <OtherDescription />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
