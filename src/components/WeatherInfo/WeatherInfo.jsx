import React from "react";
import useSWR from "swr";

import "./WeatherInfo.css";

import { CITY_COORDINATES, WEATHER_INTERPRETATION_CODES } from "../../data";

import Picture from "../Picture";

const fetcher = async (url) => {
  const response = await fetch(url);
  const json = await response.json();

  if (!response.ok) {
    throw response;
  }

  return json;
};

const WeatherInfo = ({ city }) => {
  const { lat, lon } = CITY_COORDINATES[city];

  const endpoint = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m`;

  const { data, isLoading, error } = useSWR(endpoint, fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  if (isLoading) {
    return <p>Loading…</p>;
  }

  if (error) {
    return <p>Something's gone wrong</p>;
  }

  const { hourly } = data;
  const temperature = hourly.temperature_2m[0];
  const weatherCode = hourly.weather_code[0];
  const weather = WEATHER_INTERPRETATION_CODES[weatherCode][0];
  const humidity = hourly.relative_humidity_2m[0];
  const windSpeed = hourly.wind_speed_10m[0];

  return (
    <div className="weather-info-wrapper">
      <h2>{city}</h2>
      <p>
        Tempreature: <span>{temperature}°C</span>
      </p>
      {weatherCode && <Picture weatherCode={weatherCode} />}
      <p>Weather: {weather}</p>
      <p>
        Humidity: <span>{humidity}%</span>
      </p>
      <p>
        Wind: <span>{windSpeed}</span> km/h
      </p>
    </div>
  );
};

export default WeatherInfo;
