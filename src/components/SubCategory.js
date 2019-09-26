import React from 'react';

class SubCategory extends React.Component {
    render(){
        const text = this.props.item.name;
        const url = "/" + text;
        return (
            <div className="dropdown-container">
                <a href={url} className="bm-item">
                <i className="fa fa-angle-right"></i>
                <span>{text}</span>
                </a>
            </div>
        )
    }
}

export default SubCategory;