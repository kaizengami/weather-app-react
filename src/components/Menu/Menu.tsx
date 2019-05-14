import "./Menu.scss";
import React, { Component } from "react";
import { ThemeContext } from "../Themes/theme-context";

interface Props {
  onClickButtonSimple(): void;
  onClickButtonTheme(): void;
  isButtonSimple: boolean;
  isButtonTheme: boolean;
}

interface State {
  isOpen: boolean;
  buttonSimple: boolean;
  buttonTheme: boolean;
}

class Menu extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isOpen: false,
      buttonSimple: this.props.isButtonSimple,
      buttonTheme: this.props.isButtonTheme
    };
  }

  onClickMenu = (e: any) => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  onClickButtonSimple = (e: any) => {
    this.setState(prevState => ({
      buttonSimple: !prevState.buttonSimple
    }));
    this.props.onClickButtonSimple();
  };

  onClickTheme = (e: any) => {
    this.setState(prevState => ({
      buttonTheme: !prevState.buttonTheme
    }));
    this.props.onClickButtonTheme();
  };

  render() {
    return (
      <ThemeContext.Consumer>
        {({ toggleTheme }) => (
          <div className="app-menu">
            <div
              className={
                this.state.isOpen ? "nav-icon nav-icon-open" : "nav-icon"
              }
              onClick={e => this.onClickMenu(e)}
            >
              <div />
            </div>
            {this.state.isOpen && (
              <>
                <button
                  className={
                    this.state.buttonSimple
                      ? "app-menu-button button-simple menu-button-open"
                      : "app-menu-button button-simple"
                  }
                  onClick={e => this.onClickButtonSimple(e)}
                >
                  Simple mode {this.state.buttonSimple ? "on" : "off"}
                </button>
                <button
                  className={
                    this.state.buttonTheme
                      ? "app-menu-button button-theme menu-button-open"
                      : "app-menu-button button-theme"
                  }
                  onClick={e => {
                    this.onClickTheme(e);
                    toggleTheme();
                  }}
                >
                  Dark theme {this.state.buttonTheme ? "on" : "off"}
                </button>
              </>
            )}
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default Menu;
