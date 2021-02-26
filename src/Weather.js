import React from "react";
import Search from "./Search";
import Overview from "./Overview";
import CurrentWeather from "./CurrentWeather";
import OtherDescription from "./OtherDescription";
import Forecast from "./Forecast";
import Footer from "./Footer";

import "./styles.css";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="card">
        <div className="card-body">
          <Search />
          <Overview />
          <CurrentWeather />
          <OtherDescription />
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <Forecast />
        </div>
      </div>
      <Footer />
    </div>
  );
}
