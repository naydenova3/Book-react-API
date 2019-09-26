import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class Categories extends React.Component {
  constructor() {
    super();
    this.state = {
      category: [],
    };
  }


  makeFetch() {
      fetch(`http://localhost:15350/api/category/all`)
      .then(results => {
          return results.json();
      }).then(data => 
          this.setState({category: data})
          
      )
    }
    componentDidMount() {
      this.makeFetch();
    }

  render() {
    const categList = this.state.category;
    console.log(categList);
    let listItem = categList.map(d =>
      <div key={d.id} >
        {d.name}
      </div> 
               
    )
    return (
        <div>
            {listItem}
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
