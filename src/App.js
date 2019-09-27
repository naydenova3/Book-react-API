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

    let list = array.map(book =>
      <div key={book.id} className="col-xl-4 col-lg-3 col-md-4 col-sm-2 display-books">
        {/* Pop up box with description when click on image */}
        <Popup trigger={<img src={book.imageLink} id="myImg" height="170px" width="130px" alt={noimage}></img>} modal>
          <div className="popup" onScroll="myFunc">
            <img src={book.imageLink} className="imagePopup" />
            <p className="title">

              {book.title}
            </p>
            <p className="basic-info">
              Pages: {book.pageCount}
              <br />
              Published date: {book.publishedDate}
            </p>
            <p className="subtitle">
              {book.subtitle}
            </p>

          </div>
        </Popup>
        <h6>{book.title}</h6>
      </div>

    )
    return (
      <Router>
        <Menu
            search={this.handleSearch}
            currentCategory={this.state.category}
          />
          <SideBar />
          <FilterLeft />
        <div className="container">
        {list}
        
      </div>
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
