import "./Search.scss";
import React, { Component } from "react";

interface Props {
  onSubmit(city: string): void;
  onChange(city: string): void;
  city: string;
  turnOnLoading(): void;
}

interface State {
  isValid: boolean;
  isEmpty: boolean;
}

class Search extends Component<Props, State> {
  private input: React.RefObject<HTMLInputElement>;
  constructor(props: Props) {
    super(props);

    this.state = {
      isValid: false,
      isEmpty: false
    };
    this.input = React.createRef();
  }

  centerInput = (e: any) => {
    const value = e.target.value;
    if (value.length) {
      this.setState({ isEmpty: false });
    } else this.setState({ isEmpty: true });

    this.props.onChange(value);
  };

  submitInput = (e: any) => {
    const value = e.target.value;
    const enterCode = 13;
    if (e.keyCode === enterCode) {
      const city = e.target.value.trim();
      if (this.isValidCityName(value)) {
        this.props.turnOnLoading();
        this.props.onSubmit(city);
      }
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
    return (
      <div className="search-container">
        <input
          className={this.state.isEmpty ? "" : "search-not-empty"}
          id="search"
          name="search"
          type="text"
          value={this.props.city}
          ref={this.input}
          placeholder="City, place or country..."
          autoComplete="off"
          // onInput={e => this.centerInput(e)}
          onChange={e => this.centerInput(e)}
          onKeyUp={e => this.submitInput(e)}
        />
      </div>
    );
  }
}

export default Search;
