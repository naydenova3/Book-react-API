import React from "react";
import Loading from "./Loading";
import BookDetails from "./BookDetails";
import Popup from "reactjs-popup";
import noimage from "./noimage.jpg";

class Details extends React.Component {
  componentDidMount() {
    const category = this.props.match.params;
    
    if (category === undefined) {
      this.props.search("Angular");
    } else {
      this.props.search(category);
    }
  }

  render() {
    const books = this.props.books;
    const listItems = books.map(book => (
      <div id={book.id} className="col-xl-4 col-lg-3 col-md-4 col-sm-4 display-books">
        {/* Pop up box with description when click on image */}
        <Popup trigger={<img src={book.imageLink} id="myImg" alt={noimage}></img>} modal>
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
    //   <BookDetails BookDetails={book} key={book.id} />
    ));
    const category = this.props.match.params.category;
    console.log(category);
    if (category !== undefined) {
      if (listItems.length === 0) {
        return (
          <div>
            <h2>Book search for {this.props.match.params.category}</h2>
            <Loading />
          </div>
        );
      } else {
        return (
          <div>
            <h2>Book search for {this.props.match.params.category}</h2>
            <div className="container">{listItems}</div>
          </div>
        );
      }
    } else {
      if (listItems.length === 0) {
        return (
          <div>
            <h2>Book search for {this.props.match.params.category}</h2>
            <Loading />
          </div>
        );
      } else {
        return (
          <div className="container">
            <h2>Book search for {this.props.match.params.category}</h2>
            <div className="row">{listItems}</div>
          </div>
        );
      }
    }
  }
}

export default Details;
