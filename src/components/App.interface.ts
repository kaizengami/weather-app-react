export interface ForecastCurrentStructure {
  data: ReadonlyArray<weatherCurrent>;
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

export interface weatherDaily {
  max_temp: number;
  min_temp: number;
  weather: {
    code: number;
    description: string;
    icon: string;
  };
  rh: number;
  precip: number;
  wind_dir: number;
  wind_spd: number;
  datetime: string;
}

interface weatherCurrent {
  temp: number;
  timestamp_local: string;
  weatherIcon: {};
  humidity: string;
  precip: string;
  windDirection: string;
  windSpeed: number;
}

export interface MenuStructure {
  isMenuOpen: boolean;
  isButtonSimple: boolean;
  isButtonTheme: boolean;
}

export interface Themes {
  appBackground: {
    background: string;
  };
  dailyForecast: {
    background: string;
  };
}
