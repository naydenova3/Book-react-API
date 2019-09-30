import React from "react";
import Thought from "./Thought";




class FilterLeft extends React.Component {
  handleFilter(text) {
    
    
    
    const url = "/" + text + "?search=" + text;
    return (
        <div className="dropdown-container">
            <a href={url} className="bm-item">
            <i className="fa fa-angle-right"></i>
            <span></span>
            </a>
        </div>
    )
  }

  // componentDidMount() {
  //   const category = this.props.match.params;
  //   const search = this.props.location.search;
  //   if (search === undefined){
  //     if (category === undefined) {
  //       this.props.search();
  //     } else {
  //       this.props.search(category);
  //     }
  //   } else {
  //     this.props.actualSearch(search);
  //   }
  // }


  render() {

  return (
    <div >
      <Thought />
      <nav id="sidebar" className="active">
          <div className="sidebar-header">
            <h3>Filter by:</h3>
          </div>
          <ul className="filter-comp">
          <li>
            <a href="#" className="dropdown-btn bm-item" >
              <i className="fa fa-book"></i>
              <span className="lft" onClick={this.handleFilter}>Title</span>
            </a>
          </li>
          <li>
            <a href="#" className="dropdown-btn bm-item" >
              <i className="fa fa-window-restore"></i>
              <span onClick={this.handleFilter}>Category</span>
            </a>
          </li>
          <li>
            <a href="#" className="dropdown-btn bm-item" >
              <i className="fa fa-user"></i>
              <span className="lft">Author</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
  }
};


export default FilterLeft;