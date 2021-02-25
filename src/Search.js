import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form>
        <div className="row mt-2">
          <div className="col">
            <input
              type="search"
              className="form-control form-input-style"
              placeholder="Need A Coat Today? (Enter City Name)"
            />
          </div>
          <div className="col-auto">
            <a className="btn btn-secondary" href="/" role="button">
              Search
            </a>
          </div>
          <div className="col-auto">
            <a
              className="btn btn-secondary current-location-button"
              href="/"
              role="button"
            >
              <i className="fas fa-map-marker-alt"></i>
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}
