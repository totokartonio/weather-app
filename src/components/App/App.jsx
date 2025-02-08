import React from "react";

import "./App.css";

import SearchBar from "../SearchBar";
import WeatherInfo from "../WeatherInfo";

const App = () => {
  const [city, setCity] = React.useState("Budapest");

  const handleSearchCity = (newSelectedCity) => {
    const newCity = newSelectedCity;
    setCity(newCity);
    console.log(newCity);
  };

  return (
    <div className="wrapper">
      <SearchBar city={city} handleSearchCity={handleSearchCity} />
      <WeatherInfo city={city} />
    </div>
  );
};
export default App;
