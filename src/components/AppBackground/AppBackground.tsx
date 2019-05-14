import "./AppBackground.scss";
import React, { Component } from "react";
import { ThemeContext } from "../Themes/theme-context";

import dayPcImg from "./images/bg-night-pc.svg";
import dayMobileImg from "./images/bg-day-mobile.png";
import nightPcImg from "./images/bg-night-pc.svg";
import nightMobileImg from "./images/bg-night-mobile.png";

interface Props {
  dayTime: boolean;
}

interface backgroundImg {
  dayPc: string;
  dayMobile: string;
  nightPc: string;
  nightMobile: string;
}

class AppBackground extends Component<Props> {
  private appBackground: any;
  private backgroundImg: backgroundImg;
  constructor(props: Props) {
    super(props);

    this.appBackground = React.createRef();

    this.backgroundImg = {
      dayPc: dayPcImg,
      dayMobile: dayMobileImg,
      nightPc: nightPcImg, // -
      nightMobile: nightMobileImg
    };
  }

  setBackgroundImage() {
    if (this.appBackground.current != null) {
      const appBackground: any = document.querySelector(".app-background");
      if (this.props.dayTime) {
        document.documentElement.style.setProperty(
          "--image-pc",
          `url('${this.backgroundImg.dayPc}')`
        );
        document.documentElement.style.setProperty(
          "--image-mobile",
          `url('${this.backgroundImg.dayMobile}')`
        );
      } else {
        document.documentElement.style.setProperty(
          "--image-pc",
          `url('${this.backgroundImg.nightPc}')`
        );
        document.documentElement.style.setProperty(
          "--image-mobile",
          `url('${this.backgroundImg.nightMobile}')`
        );
      }
    }
  }

  render() {
    {
      this.appBackground.current && this.setBackgroundImage();
    }

    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <div className="app-background" ref={this.appBackground}>
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
