import React, { Component } from 'react';
import noimage from "../noimage.jpg";
// import { Modal } from 'react-modal'
import Popup from "reactjs-popup";
import '../App.css';


class FetchComp extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      category: "",
    };

  }

  // Here we set the default category to JavaScript
  makeFetch(category = "JavaScript") {
    let url = `http://localhost:15350/api/book/category/${category}`;
    fetch(url)
      .then(response => response.json())
      .then(data =>
        this.setState({ books: data, category: category.name }))
  }


  componentDidMount() {
    this.makeFetch();
  }


  //In the render method we are mapping through API to get the title and the image of the books
  render() {
    const array = this.state.books;
    console.log(array);
    const arrays = this.state.category;
    console.log(arrays);
    let list = array.map(book =>
      <div key={book.id} className="col-xl-4 col-lg-3 col-md-4 col-sm-2 display-books">
        {/* Pop up box with description when click on image */}
        <Popup trigger={<img src={book.imageLink} id="myImg" height="170px" width="130px" alt={noimage}></img>} modal>
          <div className="popup" onScroll="myFunc">
          <img src={book.imageLink} className = "imagePopup" />
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
      <div className="container">
        {list}
      </div>
    )
  }
}

export default FetchComp;