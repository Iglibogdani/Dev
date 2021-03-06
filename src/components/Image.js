import React from "react";
import "./App.css";

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
  }

  render() {
    const { description, urls } = this.props.image;
    return (
        <div className="container">
      <div className="displayed-images">
        <img
          ref={this.imageRef}
          alt={description}
          src={urls.regular}
          className="each-image"
        />
       </div>
       <div>
           <h5>Info</h5>
           <span><i class="arrow alternate circle down icon"></i></span>
           <div className="description">{description}</div>
       </div>
        
      </div>
    );
  }
}

export default Image;
