const CitiesListRender = ({ citiesList, onListClick }) => {
  if (!citiesList)
    return (
      <p className="search-result-wrapper">{"I can't find that city :("}</p>
    );
  if (citiesList.length > 0)
    return (
      <ul className="search-result-wrapper">
        {citiesList.map((city) => (
          <li
            key={city.id}
            onClick={() =>
              onListClick(city.name, city.latitude, city.longitude)
            }
          >
            {city.name}, {city.country}, {city.admin1}
          </li>
        ))}
      </ul>
    );
};

export default CitiesListRender;
