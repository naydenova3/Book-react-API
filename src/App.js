import React from "react";
import "./App.css";
import "./style.css";
import Details from "./components/Details";
import Menu from "./components/Menu";
import FilterLeft from "./components/FilterLeft";
import SideBar from './SideBar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



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


  // this fetch is displaying the categories when we type smth in the search field 
  fetchCategory(category = "default") {
    let url = `http://localhost:15350/api/book/category/${category}`;
    if (category === "default"){
      console.log(category);
      url = "http://localhost:15350/api/book/all"
    } 
    fetch(url)
      .then(response => response.json())
      .then(data =>
        this.setState({ books: data, search: false}))
        //{console.log(data)} ) 
  }


  //console logva mi gi ama ne displayva nishto
  // fetchCategory() {
  //   let url = `http://localhost:15350/api/book/all`;
  //   fetch(url)
  //     .then(response => response.json())
  //     .then(data =>
  //       this.setState({ books: data }))
  // }

  // componentDidMount() {
  //   this.fetchCategory();
  //   console.log("didMount")
  // }

  handleSearch = text => {
    console.log("handleSearch")
    if (text === this.state.category || text === undefined) {
      return;
      
    }
    this.fetchCategory(text);
    
  };
  //Лъчо
  searchApi = text => {
    const url = `http://localhost:15350/api/book/search${text}`;
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ books: data, search: true }))
      {console.log("searchApi")}
  }



  render() {
    const array = this.state.books;
    console.log(array)
  
    // const ListBooks = array.map(book => (
    //   <div key = {book.id}>
    //     <img src = {book.imageLink} />
    //   </div>
    // ))
    return (

      <Router>
        <Menu
          search={this.handleSearch}
          currentCategory={this.state.category}
        />

        <SideBar />
        <FilterLeft />
        {/* <div>{ListBooks}</div> */}
        <div>

          <Switch>
            <Route
              path="/default"
              exact
              render={props => (
                <Details
                  {...props}
                  books={array}
                  category={this.state.category}
                  search={this.handleSearch}
                  // actualSearch={this.searchApi}
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
                  actualSearch={this.searchApi}
                  isSearch={this.state.search}
                />
              )}
            />
            <Route
              path="/book/:bookUrl"
              render={props => <Details {...props} books={array} />}
            />
          </Switch>
        </div>
      </Router>

    )
  }
}

export default App;
