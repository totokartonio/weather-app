const ENDPOINT_WEATHER = "https://api.open-meteo.com/v1/forecast";
const ENDPOINT_GEO = "https://geocoding-api.open-meteo.com/v1/search";

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

export { ENDPOINT_WEATHER, ENDPOINT_GEO, WEATHER_INTERPRETATION_CODES };
