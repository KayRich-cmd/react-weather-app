import React from "react";

export default function Forecast() {
  return (
    <div className="Forecast">
      <h2>Bloop from Forecast</h2>

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
            <td>Icon</td>
            <td>Icon</td>
            <td>Icon</td>
            <td>Icon</td>
            <td>Icon</td>
          </tr>
          <tr>
            <td>Temp°C</td>
            <td>Temp°C</td>
            <td>Temp°C</td>
            <td>Temp°C</td>
            <td>Temp°C</td>
          </tr>
          <tr>
            <td>Description</td>
            <td>Description</td>
            <td>Description</td>
            <td>Description</td>
            <td>Description</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
