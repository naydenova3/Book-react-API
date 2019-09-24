import React from "react";
import Thought from "./Thought";

const FilterLeft = () => {

  return (
    <div className="wrapper">
      <Thought />
      <nav id="sidebar" className="active">
        <div className="sidebar-header">
            <h3>Filter by:</h3>
        </div>
        <ul className="filter-comp">
          <li>
            <a href="#">
              <i className="fa fa-book"></i>
              <span className="lft">Title</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-window-restore"></i>
              <span>Category</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-user"></i>
              <span className="lft">Author</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};


export default FilterLeft;