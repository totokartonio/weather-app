import "./Picture.css";
import { WEATHER_INTERPRETATION_CODES } from "../../data";

const Picture = ({ weatherCode }) => {
  const weatherPicture = WEATHER_INTERPRETATION_CODES[weatherCode]
    ? WEATHER_INTERPRETATION_CODES[weatherCode][1]
    : "clear-sky.png";

  return (
    <div className="weather-picture">
      <img src={`public/images/${weatherPicture}`} alt="Weather" />
    </div>
  );
};

export default Picture;
