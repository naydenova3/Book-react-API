import React, { Component } from 'react';
import Loading from './Loading';
import noimage from "../noimage.png";


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
  makeFetch(category = "Java") {
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
        <div key={book.id}>
          <div className="container"> 
          <img src={book.imageLink} />
          <h1>{book.title}</h1>
          
          </div>
        </div>        
    )
    return ( 
      <div>
        {list}
      </div>
    )
  }
}




export default FetchComp;