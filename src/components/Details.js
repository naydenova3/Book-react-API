import React from "react";
import FetchComp from "./FetchComp";
import Loading from "./Loading";

class Details extends React.Component {
  // componentDidMount() {
  //   const category = this.props.match.params;
  //   console.log(category);
  //   if (category === undefined) {
  //     this.props.search("Angular");
  //   } else {
  //     this.props.search(category);
  //   }
  // }

  render() {
    console.log('Printing props...')
    console.log(this.props)
    console.log('...ended printing')
    const books = this.props.books;
    const listItems = books.map(book => (
      <FetchComp FetchComp={book} key={book.id} />
    ));
    const category = this.props.match.params.category;
    if (category !== undefined) {
      if (listItems.length === 0) {
        return (
          <div>
            <h2>Book search for {category}</h2>
            {/* <Loading /> */}
          </div>
        );
      } else {
        return (
          <div>
            <h2>Book search for {this.props.match.params.category}</h2>
            <div className="row">{listItems}</div>
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
            <h2>Book search for JavaScript</h2>
            <div className="row">{listItems}</div>
          </div>
        );
      }
    }
  }
}

export default Details;
