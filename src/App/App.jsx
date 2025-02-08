import React from "react";

import SearchBar from "../components/SearchBar";
import WeatherInfo from "../components/WeatherInfo";

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
