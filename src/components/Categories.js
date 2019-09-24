import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class Categories extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: "",
    };
  }


  componentDidMount() {
      fetch(`http://localhost:15350/api/category/all`)
      .then(results => {
          return results.json();
      }).then(data => {
          
          let categories = data.map((category) => {
              return(
                  <div key={category.id}>
                    {this.state.categories}
                  </div>
              )
          })
          this.setState({categories: categories});
          console.log("state", this.state.categories)
      })
  }


  render() {
    
    
    return (
        <div>
            <div>{this.state.categories}</div>
        </div>
    //   <Router>
    //     <div>

    //       {/* <Switch>
    //         <Route
    //           path="/"
    //           exact
    //           render={props => (
    //             <Details
    //               {...props}
    //               books={books}
    //               category={this.state.category}
    //               search={this.handleSearch}
    //             />
    //           )}
    //         />
    //         <Route
    //           path="/:category"
    //           exact
    //           render={props => (
    //             <Details
    //               {...props}
    //               books={books}
    //               category={this.state.category}
    //               search={this.handleSearch}
    //             />
    //           )}
    //         />
    //         <Route
    //           path="/book/:bookUrl"
    //           render={props => <Book {...props} books={books} />}
    //         />
    //       </Switch> */}
    //     </div>
    //   </Router>
    );
  }
}

export default Categories;
