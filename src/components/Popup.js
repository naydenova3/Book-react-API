import React, { Component } from 'react';


const Popup = () => {

 return (
    // const array = this.state.books;

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
 )
  }
}
  export default Popup;