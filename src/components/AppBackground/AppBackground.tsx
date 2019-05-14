import "./AppBackground.scss";
import React, { Component } from "react";
import { ThemeContext } from "../Themes/theme-context";

class AppBackground extends Component {
  constructor(props: boolean) {
    super(props);

    this.state = {
      day: true
    };
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <div className="app-background">
            <div
              className="dark-layer"
              style={{ backgroundColor: theme.appBackground.background }}
            />
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default AppBackground;
