import "./Search.scss";
import React, { Component } from "react";

interface Props {
  submit(city: string): void;
}

interface State {
  isValid: boolean;
  isEmpty: boolean;
  value: string;
}

class Search extends Component<Props, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      isValid: false,
      isEmpty: true,
      value: ""
    };
  }

  centerInput = (e: any) => {
    const value = e.target.value;
    this.setState({ value: value });
    if (value.length) {
      this.setState({ isEmpty: false });
    } else this.setState({ isEmpty: true });
  };

  submitInput = (e: any) => {
    if (e.keyCode === 13) {
      const city = e.target.value.trim();
      if (this.isValidCityName(this.state.value))
        console.log(this.props.submit(city));
    }
  };
  /*
  onKeyup() {
    if (event.keyCode == 13) {
      const city = event.target.value.trim();
      console.log(this.props);
      if (this.isValidCityName(city)) {
        this.props.onSubmit(city);
        if (!this.state.isValid) {
          this.updateState({ isValid: true });
        }
      } else {
        this.updateState({ isValid: false });
      }
    }
  }
*/
  isValidCityName(name: string) {
    return !!name && !/\d/.test(name);
  }

  render() {
    return (
      <div className="search-container">
        <input
          className={this.state.isEmpty ? "" : "search-not-empty"}
          id="search"
          name="search"
          type="text"
          ref="search"
          placeholder="City, place or country..."
          onInput={e => this.centerInput(e)}
          onKeyUp={e => this.submitInput(e)}
        />
      </div>
    );
  }
}

export default Search;
