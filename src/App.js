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
      category: [],
      search: false
    };
  }

  // fetchAllBooks() {
  //   let url = "http://localhost:15350/api/book/all";
  //   fetch(url)
  //     .then(response => response.json())
  //     .then(data =>
  //       this.setState({ books: data}))
  // }
  //Лъчо
  fetchCategory(category = "default") {
    let url = `http://localhost:15350/api/book/category/${category}`;
    if (category === "default"){
      url = "http://localhost:15350/api/book/all"
    }
    fetch(url)
      .then(response => response.json())
      .then(data =>
        this.setState({ books: data, search: false}))
  }

  handleSearch = text => {
    if (text === this.state.category || text === undefined) {
      return;
    }
    // this.makeFetch(text);
  };
  //Лъчо
  searchApi = text => {
    const url = `http://localhost:15350/api/book/search${text}`;
    fetch(url)
    .then(response => response.json())
    .then(json => this.setState({books: json, search: true}))
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
              path="/"
              exact
              render={props => (
                <Details
                  {...props}
                  books={array}
                  category={this.state.category}
                  search={this.handleSearch}
                  //Лъчо
                  actualSearch={this.searchApi}
                  isSearch={this.state.search}
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
                  //Лъчо
                  actualSearch={this.searchApi}
                  isSearch={this.state.search}
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
