import "./Search.scss";
import React, { Component } from "react";

interface Props {
  onSubmit(city: string): void;
  city: string;
}

interface State {
  isValid: boolean;
  isEmpty: boolean;
}

class Search extends Component<Props, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      isValid: false,
      isEmpty: false
    };
  }

  centerInput = (e: any) => {
    const value = e.target.value;
    if (value.length) {
      this.setState({ isEmpty: false });
    } else this.setState({ isEmpty: true });
  };

  submitInput = (e: any) => {
    const value = e.target.value;
    if (e.keyCode === 13) {
      const city = e.target.value.trim();
      if (this.isValidCityName(value)) this.props.onSubmit(city);
    }
  };

  isValidCityName(name: string) {
    return !!name && !/\d/.test(name);
  }

  componentDidMount() {
    const search: any = document.getElementById("search");
    search.value = this.props.city;
  }

  render() {
    console.log(this.props.city);
    return (
      <div className="search-container">
        <input
          className={this.state.isEmpty ? "" : "search-not-empty"}
          id="search"
          name="search"
          type="text"
          ref="search"
          placeholder="City, place or country..."
          autoComplete="off"
          onInput={e => this.centerInput(e)}
          onKeyUp={e => this.submitInput(e)}
        />
      </div>
    );
  }
}

export default Search;
