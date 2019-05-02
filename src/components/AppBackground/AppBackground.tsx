import "./AppBackground.scss";
import React, { Component } from "react";

class AppBackground extends Component {
  constructor(props: boolean) {
    super(props);

    this.state = {
      day: true
    };
  }

  render() {
    return <div className="app-background" />;
  }
}

export default AppBackground;
