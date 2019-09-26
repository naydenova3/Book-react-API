import React from "react";
import "./App.css";
import "./style.css";
import Details from "./components/Details";
import Menu from "./components/Menu";
import FilterLeft from "./components/FilterLeft";
import Categories from "./components/Categories";
import SideBar from './SideBar';
import Book from "./components/Book";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FetchComp from "./components/FetchComp";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      books: [],
      category: {}
    };
  }

  handleSearch = text => {
    if (text === this.state.category || text === undefined) {
      return;
    }
  // this.makeFetch(text);
  };

 

  render() {
    const books = this.state.books;
    return (
      <Router>
        <div>
          <Menu
            search={this.handleSearch}
            currentCategory={this.state.category}
          />
          <SideBar />
          <FilterLeft />
          <FetchComp />
          
          <Switch>
            <Route
              path="/"
              exact
              render={props => (
                <Details
                  {...props}
                  books={books}
                  category={this.state.category}
                  search={this.handleSearch}
                />
              )}

            />
            <Route
              path="/:category"
              exact
              render={props => (
                <Details
                  {...props}
                  books={books}
                  category={this.state.category}
                  search={this.handleSearch}
                />
              )}
            />
            <Route
              path="/book/:bookUrl"
              render={props => <Book {...props} books={books} />}
            />
          </Switch>
          

        </div>
      </Router>
    );
  }
}

export default App;
