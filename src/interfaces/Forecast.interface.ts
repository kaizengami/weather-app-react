export interface Forecast {
  forecast: ForecastStructure;
}

interface weather {
  app_temp: number;
  weatherIcon: {};
  humidity: string;
  precip: string;
  windDirection: string;
  windSpeed: number;
}

export interface ForecastStructure {
  data: ReadonlyArray<weather>;
  city_name: string;
  country_code: string;
  timezone: string;
}
