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
        <div key={book.id}>
          <div className="container"> 
          <img src={book.imageLink} />
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