import React from 'react';

import Popup from "reactjs-popup";
import noimage from "./noimage.jpg";

class DisplayAllBooks extends React.Component {
    constructor() {
        super();
        this.state = {
            books: [],
        };
    }
    
  fetchAll() {
    let url = "http://localhost:15350/api/book/all"
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ books: data}))}

  componentDidMount() {
   this.fetchAll();
  }
    render() {
        return (
            <div>
                {this.state.books.map((book)=> (
                   <div key={book.id} id={book.id} className="col-xl-4 col-lg-3 col-md-4 col-sm-4 display-books">
                   {/* Pop up box with description when click on image */}
                   <Popup trigger={<img src={book.imageLink} id="myImg" alt={noimage}></img>} modal>
                     <div className="popup" onScroll="myFunc">
                       <img src={book.imageLink} className="imagePopup" alt={noimage} />
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
                ))}

            </div>
        )
    }
}
export default DisplayAllBooks;