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
  render() {
    const listItemsText = this.state.category;
    const currentCategory = this.props.currentCategory;
    const actualListItems = listItemsText.map(item => {
      const category = "/" + item.subCategories;
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
            key={item.id}
            url={category}
          />
        );
      }
    });
    return (
      <nav className="navbar navbar-expand-lg bgNav">
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
