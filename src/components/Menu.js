import React from "react";
import SearchForm from "./SearchForm";

import MenuListItem from "./MenuListItem";

class Menu extends React.Component {
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

  handleSearch = text => {
    this.props.search(text);
  };

  render() {
    const listItemsText = this.state.category; 
    console.log(listItemsText);
    let listItem = listItemsText.map(d =>
      <div>
        {d.name}
      </div>         
    )

    const currentCategory = this.props.currentCategory;
    const actualListItems = listItemsText.map(item => {
      const category = "/" + item.name;
      if (currentCategory === item.name) {
        return (
          <MenuListItem
            text={item.name}
            isActive={true}
            key={item.categoryId}
            url={category}
          />
        );
      } else {
        return (
          <MenuListItem
            text={item.name}
            isActive={false}
            key={item.categoryId}
            url={category}
          />
        );
      }
    });
    return (
      <nav className="navbar navbar-expand-lg bgNav">
        
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        </button>
        <span className="navbar-brand ">Book Catalog</span>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">{actualListItems}</ul>
          <SearchForm search={this.handleSearch} />
        </div>
        <nav className="navbar">
          <div className="container-fluid">
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
