import "./WeatherInfo.css";
import { WEATHER_INTERPRETATION_CODES } from "../../data";

const WeatherInfoIllustration = ({ weatherCode }) => {
  const weatherIllustration =
    WEATHER_INTERPRETATION_CODES[weatherCode]?.[1] ?? "clear-sky.png";

  return (
    <div className="weather-info-illustration">
      <img src={`public/images/${weatherIllustration}`} alt="Weather" />
    </div>
  );
};

export default WeatherInfoIllustration;
