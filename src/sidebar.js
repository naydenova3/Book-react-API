import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import Category from './components/Category';

class SideBar extends React.Component {

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
    let listItem = categList.map(n => {
      return <Category key={n.id} current={n} />
    }) ;

        

  
  return (
    <Menu>
      <div className="book-categories">BOOK CATEGORIES</div> 
      <div>
        {listItem}
      </div>

    </Menu>
  );
  }
}

export default SideBar;