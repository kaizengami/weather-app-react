let proxyUrl: string = "https://cors-anywhere.herokuapp.com/";
const API_KEY = "&key=4e4006dc280346f9ab2a2471ffc67574";
const CURRENT_FORECAST_URL =
  proxyUrl + `https://api.weatherbit.io/v2.0/forecast/hourly?city=`; //two day hourly
const DAILY_FORECAST_URL =
  proxyUrl + `https://api.weatherbit.io/v2.0/forecast/daily?city=`; // 16 day forecast
const UNITS = "&units=M";

const get = async (url: string) => {
  try {
    const response = await fetch(url, { mode: "cors" });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    let data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};

export const getCurrentForecast = (city: String) =>
  get(CURRENT_FORECAST_URL + city + UNITS + API_KEY);
export const getDailyForecast = (city: String) =>
  get(DAILY_FORECAST_URL + city + UNITS + API_KEY);
export const getForecast = (city: String) =>
  Promise.all([getCurrentForecast(city), getDailyForecast(city)]);
