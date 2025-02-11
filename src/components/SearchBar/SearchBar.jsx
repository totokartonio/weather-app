import React from "react";
import "./SearchBar.css";

import { ENDPOINT_GEO } from "../../data";
import fetcher from "../../utils";
import CitiesListRender from "./CitiesListRender";

const SearchBar = ({ onCityClick }) => {
  const [inputValue, setInputValue] = React.useState(""); //State controlling input
  const [citiesList, setCitiesList] = React.useState([]); //State controlling cities received through API

  React.useEffect(() => {
    //Early return for empty input. The setter function empties city list when we clear input without submitting
    if (inputValue === "") {
      setCitiesList([]);
      return;
    }

    const timeoutId = window.setTimeout(() => {
      const fetchCities = async () => {
        const url = `${ENDPOINT_GEO}?name=${inputValue}&count=10&language=en&format=json`;
        try {
          const data = await fetcher(url);
          setCitiesList(data.results);
        } catch (error) {
          console.error("Error fetching cities:", error);
        }
      };

      fetchCities();
    }, 300);
    if (timeoutId)
      return () => {
        window.clearTimeout(timeoutId);
      };
  }, [inputValue]);

  const handleOnChange = (event) => {
    const newInputValue = event.target.value;
    setInputValue(newInputValue);
  };

  const handleOnClick = (name, latitude, longitude) => {
    onCityClick(name, latitude, longitude);
    setInputValue("");
    setCitiesList([]);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    //To avoid error "Cannot read properties of undefined (reading '0')" (e.g. when submitting non-exisiting city)
    if (!citiesList) {
      setInputValue("");
      setCitiesList([]);
      return;
    }

    //Default submit behaviour: choose first mathcing city
    const matchingCity = citiesList[0];
    onCityClick(
      matchingCity.name,
      matchingCity.latitude,
      matchingCity.longitude
    );
  };

  return (
    <div className="search-container">
      <form className="search-bar-input-wrapper" onSubmit={handleOnSubmit}>
        <input
          type="text"
          id="search-bar-input"
          placeholder="Search for a city"
          value={inputValue}
          onChange={handleOnChange}
        />
      </form>
      <CitiesListRender citiesList={citiesList} onListClick={handleOnClick} />
    </div>
  );
};

export default SearchBar;
