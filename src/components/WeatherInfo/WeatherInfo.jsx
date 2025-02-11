import React from "react";
import useSWR from "swr";

import fetcher from "../../utils";

import "./WeatherInfo.css";

import { ENDPOINT_WEATHER, WEATHER_INTERPRETATION_CODES } from "../../data";

import WeatherInfoIllustration from "./WeatherInfoIllustration";

const WeatherInfo = ({ cityInfo }) => {
  const url = `${ENDPOINT_WEATHER}?latitude=${cityInfo.latitude}&longitude=${cityInfo.longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m`;

  const { data, isLoading, error } = useSWR(url, fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  if (isLoading) {
    return <p>Loading…</p>;
  }

  if (error) {
    return <p>Something's gone wrong</p>;
  }

  const { current } = data;
  const temperature = current.temperature_2m;
  const weatherCode = current.weather_code;
  const weather = WEATHER_INTERPRETATION_CODES[weatherCode][0];
  const humidity = current.relative_humidity_2m;
  const windSpeed = current.wind_speed_10m;

  return (
    <div className="weather-info-wrapper">
      <h2>{cityInfo.name}</h2>
      <p>
        Tempreature: <span>{temperature}°C</span>
      </p>
      <WeatherInfoIllustration weatherCode={weatherCode} />
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
