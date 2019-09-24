import React from "react";

class SearchForm extends React.Component {
  constructor() {
    super();
    this.state = {
      inputText: ""
    };
  }

  handleInput = e => {
    this.setState({ inputText: e.target.value });
  };

  render() {
    const action = "/" + this.state.inputText;
    return (
      <form
        className="form-inline my-2 my-lg-0"
        id="search-form"
        method="GET"
        action={action}
      >
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search for Book"
          aria-label="Search"
          onChange={this.handleInput}
          name="search"
          value={this.state.inputText}
        />
        <button className="btn btn-outline-light my-2 grn" type="submit">
          Search
        </button>
      </form>
    );
  }
}

export default SearchForm;
