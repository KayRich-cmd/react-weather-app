import React from "react";

import "./OtherDescription.css";

export default function OtherDescription() {
  return (
    <div className="OtherDescription">
      <ul>
        <li>
          <span className="other-description-label"> Humidity:</span>{" "}
          <span>--%</span>
        </li>
        <li>
          <span className="other-description-label"> Wind Speed:</span>{" "}
          <span>--</span> km/h
        </li>
      </ul>
    </div>
  );
}
