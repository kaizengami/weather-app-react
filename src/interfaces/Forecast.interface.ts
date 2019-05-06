export interface ForecastCurrent {
  forecast: ForecastCurrentStructure;
}

export interface ForecastDaily {
  forecast: ForecastDailyStructure;
}

interface weather {
  temp: number;
  timestamp_local: string;
  weatherIcon: {};
  humidity: string;
  precip: string;
  windDirection: string;
  windSpeed: number;
}

export interface weatherDaily {
  tempMax: number;
  tempMin: number;
  weatherIcon: {};
  humidity: string;
  precip: string;
  windDirection: string;
  windSpeed: number;
}

export interface ForecastCurrentStructure {
  data: ReadonlyArray<weather>;
  city_name: string;
  country_code: string;
  timezone: string;
}

export interface ForecastDailyStructure {
  data: ReadonlyArray<weatherDaily>;
  city_name: string;
  country_code: string;
  timezone: string;
}
