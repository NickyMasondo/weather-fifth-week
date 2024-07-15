import "./App.css";
import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Durban" />
        <footer>
          <span> This project was coded by </span>
          <a
            href="https://https://github.com/NickyMasondo"
            target="blank"
            rel="noreferrer"
          >
            Sinikeziwe Masondo
          </a>
          <span> and is </span>

          <a
            href="https://https://github.com/NickyMasondo/weather-fifth-week"
            target="blank"
            rel="noreferrer"
          >
            open-sourced on GitHub.
          </a>
        </footer>
      </div>
    </div>
  );
}
