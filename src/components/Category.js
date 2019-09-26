import React from 'react';
import SubCategory from './SubCategory';

class Category extends React.Component{
    toggleSubCategories(){
        const subDivId = "sub"+ this.props.current.name;
        let items = document.getElementById(subDivId);
        if (items.style.display === "none") {
            items.style.display = "block";
          } else {
            items.style.display = "none";
          }
    }

    render(){
        if (this.props.current === undefined){
            return <div></div>
        }
        const subCategories = this.props.current.subCategories;
        const text = this.props.current.name;
        const subItems = subCategories.map(item => {
            	return <SubCategory item={item} key={item.id} />
        });
        const subDivId = "sub"+ text;
        return (
            <div>
                <span id={this.props.current.id} className="dropdown-btn bm-item" onClick={this.toggleSubCategories.bind(this)}>
                {text}
                </span>
                <div id={subDivId} style={{display: "none"}}>
                {subItems}
                </div>
            </div>
        )
    }
}

export default Category;