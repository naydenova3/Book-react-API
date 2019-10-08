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
  render() {

    return (
      <div >
        <Thought />
        <nav id="sidebar" className="active">
          <div className="sidebar-header">
            <h3>Filter by pages count</h3>
          </div>
          <ul className="filter-comp">
            <li>
              <a href="#" className="dropdown-btn bm-item" >
                <i className="fa fa-book"></i>
                <span className="lft" onClick={this.handleFilter}>0 - 99</span>
              </a>
            </li>
            <li>
              <a href="#" className="dropdown-btn bm-item" >
              <i className="fa fa-book"></i>
                {/* <i className="fa fa-window-restore"></i> */}
                <span onClick={this.handleFilter}>99 - 250</span>
              </a>
            </li>
            <li>
              <a href="#" className="dropdown-btn bm-item" >
              <i className="fa fa-book"></i>
                {/* <i className="fa fa-user"></i> */}
                <span className="lft">> 250</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
};


export default FilterLeft;