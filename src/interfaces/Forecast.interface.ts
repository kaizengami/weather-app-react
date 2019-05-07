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
  max_temp: number;
  min_temp: number;
  weatherIcon: {};
  rh: number;
  precip: number;
  wind_dir: number;
  wind_spd: number;
  datetime: string;
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
