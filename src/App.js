import React from "react";
import "./App.css";
import "./style.css";
import Details from "./components/Details";
import Menu from "./components/Menu";
import Book from "./components/Book";
import FilterLeft from "./components/FilterLeft";
import SideBar from './SideBar';
import SearchCategory from "./components/SearchCategory";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Popup from "reactjs-popup";
import SearchForm from "./components/SearchForm"
import noimage from "./noimage.jpg";

//This is a single page application that takes books from an api using React js. Our default category is JavaScript.

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      books: [],
      category: []
    };
  }

  // fetchAllBooks() {
  //   let url = "http://localhost:15350/api/book/all";
  //   fetch(url)
  //     .then(response => response.json())
  //     .then(data =>
  //       this.setState({ books: data}))
  // }

  fetchCategory(category = "JavaScript") {
    let url = `http://localhost:15350/api/book/category/${category}`;
    fetch(url)
      .then(response => response.json())
      .then(data =>
        this.setState({ books: data}))
  }

  componentDidMount() {
    // this.fetchAllBooks();
    this.fetchCategory();
  }

  handleSearch = text => {
    if (text === this.state.category || text === undefined) {
      return;
    }
    // this.makeFetch(text);
  };


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
          
          {/* <FetchComp /> */}

          <Switch>

            <Route
              path="/"
              exact
              render={props => (
                <Details
                  {...props}
                  books={array}
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
                  books={array}
                  category={this.state.category}
                  search={this.handleSearch}
                />
              )}
            />
             <Route
              path="/book/:bookUrl"
              render={props => <Book {...props} books={array} />}
            />
          </Switch>
        </div>
      </Router>
      
    )
  }
}

export default App;
