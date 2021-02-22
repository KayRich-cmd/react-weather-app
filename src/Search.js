import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form>
        <div className="row">
          <div className="col-8">
            <input
              type="search"
              className="form-control form-input-style"
              placeholder="Cold Enough For A Coat Today? (Enter City Name)"
              autocomplete="off"
            />
          </div>
          <div className="col-4">
            <a className="btn btn-primary search" href="/" role="button">
              Search
            </a>
            <a className="btn btn-primary search" href="/" role="button">
              <i className="fas fa-map-marker-alt"></i>
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}
