const CITY_COORDINATES = {
  Budapest: { lat: 47.4979, lon: 19.0402 },
  Istanbul: { lat: 41.0082, lon: 28.9784 },
  Amsterdam: { lat: 52.3676, lon: 4.9041 },
  Berlin: { lat: 52.52, lon: 13.405 },
};

const WEATHER_INTERPRETATION_CODES = {
  0: ["Clear sky", "clear-sky.png"],
  2: ["Mainly clear, partly cloudy, and overcast", "partly-cloudly.png"],
  1: ["Mainly clear, partly cloudy, and overcast", "partly-cloudly.png"],
  3: ["Mainly clear, partly cloudy, and overcast", "partly-cloudly.png"],
  48: ["Fog and depositing rime fog", "cloudly.png"],
  45: ["Fog and depositing rime fog", "cloudly.png"],
  51: ["Drizzle: Light, moderate, and dense intensity", "cloudly.png"],
  53: ["Drizzle: Light, moderate, and dense intensity", "cloudly.png"],
  55: ["Drizzle: Light, moderate, and dense intensity", "cloudly.png"],
  56: ["Freezing Drizzle: Light and dense intensity", "cloudly.png"],
  57: ["Freezing Drizzle: Light and dense intensity", "cloudly.png"],
  61: ["Rain: Slight, moderate and heavy intensity", "rainy.png"],
  63: ["Rain: Slight, moderate and heavy intensity", "rainy.png"],
  65: ["Rain: Slight, moderate and heavy intensity", "rainy.png"],
  66: ["Freezing Rain: Light and heavy intensity", "rainy.png"],
  67: ["Freezing Rain: Light and heavy intensity", "rainy.png"],
  71: ["Snow fall: Slight, moderate, and heavy intensity", "snow.png"],
  73: ["Snow fall: Slight, moderate, and heavy intensity", "snow.png"],
  75: ["Snow fall: Slight, moderate, and heavy intensity", "snow.png"],
  77: ["Snow grains", "snow.png"],
  82: ["Rain showers: Slight, moderate, and violent", "rainy.png"],
  81: ["Rain showers: Slight, moderate, and violent", "rainy.png"],
  80: ["Rain showers: Slight, moderate, and violent", "rainy.png"],
  85: ["Snow showers slight and heavy", "snow.png"],
  86: ["Snow showers slight and heavy", "snow.png"],
  95: ["Thunderstorm: Slight or moderate", "stormy.png"],
  96: ["Thunderstorm: Slight or moderate", "stormy.png"],
  99: ["Thunderstorm: Slight or moderate", "stormy.png"],
};

export { CITY_COORDINATES, WEATHER_INTERPRETATION_CODES };
