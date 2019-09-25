import React, { Component } from 'react';


class FetchComp extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      category: ""
    };
  }
  //api call
  fetchBooks(){
    fetch("http://localhost:15350/api/book/all")
      .then(response => response.json())
      .then(data => {
         this.setState({books: data})
        })
      .catch(err => {
        console.log(err);
      })
  }


  componentDidMount() {
    this.fetchBooks();
  }


  render() {
    const array = this.state.books;
    console.log(array);
    let list = array.map(book =>
        
          <div key={book.id} className="col-sm-2"> 
          <img src={book.imageLink} />
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