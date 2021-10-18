import React from "react";
import "./App.css";
import axios from "axios"; 
import Search from "./search" 


export default function Weather() {
  let weatherData = {
    city: "New york",
    date: "Tuesday 10:oo",
    description: "Cloudy",
    imgUrl:
      "https://cdn.iconscout.com/icon/premium/png-256-thumb/unknown-weather-4127335-3425639.png",
    humidity: 80,
    wind: 20,
    temperature: 19
  };
  return (

    <div className="Weather">
      <form className="mb-3">
        <div className="row">
          <div className="col-9">
           <search /> 
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>

      <div className="overview">
        <h1> {weatherData.city}</h1>
        <ul>
          <li>
            <span> {weatherData.date}</span>{" "}
          </li>
          <li>
            <span> {weatherData.description} </span>
          </li>
        </ul>
      </div>

      <div className="col-6">
        <div className="d-flex weather-temperature">
          <img
            src={weatherData.imgUrl}
            alt={weatherData.description}
            id="icon"
            className="float-left"
          />
          <div className="float-left">
            <strong> {weatherData.temperature}</strong>
            <span className="metric">
              <a href="/" className="celcius">
                °C
              </a>
              <span className="or"> | </span>
              <a href="/" className="fahrenheit">
                °F{" "}
              </a>
            </span>
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <ul>
          <li> Humidity: {weatherData.humidity}%</li>
          <li> Wind: {weatherData.wind} km/h</li>
        </ul>
      </div>
    </div>
  );
}