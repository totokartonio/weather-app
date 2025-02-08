import React from "react";

import "./SearchBar.css";

const CITIES = [
  {
    label: "Budapest",
    value: "Budapest",
  },
  {
    label: "Istanbul",
    value: "Istanbul",
  },
  {
    label: "Amsterdam",
    value: "Amsterdam",
  },
  {
    label: "Berlin",
    value: "Berlin",
  },
];

const SearchBar = ({ city, handleSearchCity }) => {
  const handleOnChange = (event) => {
    const newSelectedCity = event.target.value;
    handleSearchCity(newSelectedCity);
  };

  return (
    <form className="search-bar-input-wrapper">
      <label htmlFor="search-bar-input">Select your city: </label>
      <select id="search-bar-input" value={city} onChange={handleOnChange}>
        {CITIES.map((city) => (
          <option key={city.value} value={city.value}>
            {city.label}
          </option>
        ))}
      </select>
    </form>
  );
};

export default SearchBar;
