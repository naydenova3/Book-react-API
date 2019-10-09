import React from "react";
import "./App.css";
import "./style.css";
import Details from "./components/Details";
import Menu from "./components/Menu";
import FilterLeft from "./components/FilterLeft";
import SideBar from './SideBar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DisplayAllBooks from "./components/DisplayAllBooks";


//This is a single page application that takes books from an api using React js. Our default category is JavaScript.

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      books: [],
      category: [],
      search: false
    };
  }

  fetchCategory(category = "default") {
    let url = `http://localhost:15350/api/book/category/${category}`;
     fetch(url)
      .then(response => response.json())
      .then(data =>
        this.setState({ books: data, search: false }))
  }

  handleSearch = text => {
    console.log("handleSearch")
    if (text === this.state.category || text === undefined) {
      return "handleSearch";
    }
    this.fetchCategory(text);
    console.log("handleSearch2")
  };

  searchApi = text => {
    const url = `http://localhost:15350/api/book/search${text}`;
    fetch(url)
      .then(response => response.json())
      .then(json => this.setState({ books: json, search: true }))
  }

  render() {
    const array = this.state.books;
    return (
      <Router>
        <Menu
          search={this.handleSearch}
          currentCategory={this.state.category}
        />
        <SideBar />
        <FilterLeft />
        <div>
          <Switch>
            <Route
              exact
              path="/"
              component={DisplayAllBooks}
            />
            <Route
              exact
              path="/:category"
              render={props => (
                <Details
                  {...props}
                  books={array}
                  category={this.state.category}
                  search={this.handleSearch}
                  actualSearch={this.searchApi}
                  isSearch={this.state.search}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
