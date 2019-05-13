import "./Menu.scss";
import React, { Component } from "react";

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
  private input: React.RefObject<HTMLInputElement>;
  constructor(props: Props) {
    super(props);

    this.state = {
      isOpen: false,
      buttonSimple: this.props.isButtonSimple,
      buttonTheme: this.props.isButtonTheme
    };
    this.input = React.createRef();
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
      <div className="app-menu">
        <div
          className={this.state.isOpen ? "nav-icon nav-icon-open" : "nav-icon"}
          onClick={e => this.onClickMenu(e)}
        >
          <div />
        </div>
        {this.state.isOpen && (
          <>
            <button
              className="app-menu-button button-simple"
              onClick={e => this.onClickButtonSimple(e)}
            >
              Simple mode {this.state.buttonSimple ? "on" : "off"}
            </button>
            <button
              className="app-menu-button button-theme"
              onClick={e => this.onClickTheme(e)}
            >
              Dark theme {this.state.buttonTheme ? "on" : "off"}
            </button>
          </>
        )}
      </div>
    );
  }
}

export default Menu;
