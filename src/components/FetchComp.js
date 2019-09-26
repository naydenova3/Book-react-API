import React, { Component } from 'react';
import Loading from './Loading';
import noimage from "../noimage.jpg";


class FetchComp extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      category: ""
    };
  }
  //api call
  // fetchBooks(){
  //   fetch("http://localhost:15350/api/book/all")
  //     .then(response => response.json())
  //     .then(data => {
  //        this.setState({books: data,})
  //       })
  //     .catch(err => {
  //       console.log(err);
  //     })
  // }


  // 
  makeFetch(category = "Angular") {
    let url = `http://localhost:15350/api/book/category/${category}`;
    fetch(url)
    .then(response => response.json())
    .then(data => 
      this.setState({ books: data, category: category.name}))  
  }
  componentDidMount() {
    this.makeFetch();
  }


  render() {
    const array = this.state.books;
    let list = array.map(book =>
      <div className="card" key={book.id} className="col-xl-4 col-lg-3 col-md-4 col-sm-2 display-books" >
        <img src={book.imageLink} alt={noimage} />
        <div className="card-body">
          <p className="card-text">{book.title}</p>
        </div>
      </div> 
               
    )
    return ( 
      <div className="container">
        {list}
      </div>
    )
  }
}




export default FetchComp;