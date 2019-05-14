import React from "react";

export const themes = {
  light: {
    appBackground: {
      background: "transparent"
    },
    dailyForecast: {
      background: "#0a1949"
    }
  },
  dark: {
    appBackground: {
      background: "black"
    },
    dailyForecast: {
      background: "black"
    }
  }
};

export const ThemeContext = React.createContext({
  theme: themes.light,
  toggleTheme: () => {}
});
