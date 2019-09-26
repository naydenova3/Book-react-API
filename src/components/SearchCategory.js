import React, { Component } from 'react';



class SearchCategory extends Component {
  constructor() {
    super();
    this.state = {
    
      category: []
    };

  }

  makeFetch(category = "JavaScript") {
    let url = `http://localhost:15350/api/category/all`;
    fetch(url)
      .then(response => response.json())
      .then(data =>
        
        this.setState({ category: data }))
  }


  componentDidMount() {
    this.makeFetch();
  }


  //In the render method we are mapping through API to get the title and the image of the books
  render() {
    const arr = this.state.category;
    let categ = arr.map(item =>
    <div >
        {item.name}
    </div>
    )
    return (
      <div className="container">
          {categ}
      </div>
    )
  }
}

export default SearchCategory;