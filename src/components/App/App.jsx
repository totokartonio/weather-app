import React from "react";

import "./App.css";
import "../../reset.css";

import SearchBar from "../SearchBar";
import WeatherInfo from "../WeatherInfo";

const App = () => {
  const [cityInfo, setCityInfo] = React.useState(null);

  const handleOnClick = (name, latitude, longitude) => {
    const newCityInfo = { name, latitude, longitude };
    setCityInfo(newCityInfo);
  };

  return (
    <div className="wrapper">
      <SearchBar onCityClick={handleOnClick} />
      {!cityInfo && (
        <p className="idle-wrapper">Let's find out weather in your city!</p>
      )}
      {cityInfo && <WeatherInfo cityInfo={cityInfo} />}
    </div>
  );
};
export default App;
