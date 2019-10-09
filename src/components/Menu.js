import React from "react";
import SearchForm from "./SearchForm";

class Menu extends React.Component {

  render() {
    return (
      <nav className="navbar navbar-expand-lg bgNav">
        <span className="navbar-brand ">Book Catalog</span>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto"></ul>
          <SearchForm  />
        </div>
        <nav className="navbar">
          <div className="container-fluid">
            {/* this is the filter button */}
            <button type="button" id="sidebarCollapse" className="btn btn-info">
              <i className="fa fa-filter  fa-lg"></i>
            </button>
          </div>
        </nav>
      </nav>
    );
  }
}
export default Menu;
