import Weather from "./weather";
import './App.css';
import axios from "axios"; 
import Search from "./search";


export default function App() {
  return (
    <div className="App">
    <Search/>
      <Weather />

      <footer>
          This project was coded by{" "}
          <a
            href="https://www.delac.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Urszula Krzemińska
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/ula345/weather-react.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://suspicious-beaver-111c4d.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
        </div>
 
  );
}
