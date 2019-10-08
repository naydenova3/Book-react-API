import React from "react";
import Loading from "./Loading";
import Popup from "reactjs-popup";
import noimage from "./noimage.jpg";

class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      books: [],
      category: [],
    };
  }

  //check category
  //fetch items for current category
  //display new items

  // makeFetch() {
  //   let url = `http://localhost:15350/api/book/all`;
  //   fetch(url)
  //     .then(response => response.json())
  //     .then(data =>
  //       this.setState({ books: data }))
  // }


  componentDidMount() {
    const category = this.props.match.params;
    const search = this.props.location.search;
    if (search === undefined) {
      if (category === undefined) {
        this.makeFetch();
        this.props.search();
      } else {
        this.props.search(category);
      }
    }else {
     this.props.actualSearch(search);
    }
}

  render() {
    const search = this.props.location.search;
    const category = this.props.match.params.category;
    const books = this.props.books;

    const listItems = books.map(book => (
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

    ));
    if (search !== undefined) {
      if (this.props.isSearch) {
        return (
          <div>
            <h2 className="book-search">Book search for {this.props.match.params.category}</h2>
            <div className="container">{listItems}</div>
          </div>
        );
      } else {
        return (
          <div>
            <h2 className="book-search">Book search for {this.props.match.params.category}</h2>
            <Loading />
          </div>
        );
      }
    }
    if (category !== undefined) {
      if (listItems.length === 0) {
        return (
          <div>
            <h2 className="book-search">Book search for {this.props.match.params.category}</h2>
            <Loading />
          </div>
        );
      } else {
        return (
          <div>
            <h2 className="book-search">Book search for {this.props.match.params.category}</h2>
            <div className="container">{listItems}</div>
          </div>
        );
      }
    } else {
      if (listItems.length === 0) {
        return (
          <div>
            <h2 className="book-search">Book search for {this.props.match.params.category}</h2>
            <Loading />
          </div>
        );
      } else {
        return (
          <div className="container">
            <h2 className="book-search">Book search for {this.props.match.params.category}</h2>
            <div className="row">{listItems}</div>
          </div>
        );
      }
    }
  }
}

export default Details;
