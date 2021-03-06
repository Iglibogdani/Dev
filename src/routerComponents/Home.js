import React from "react";
import { Link } from "react-router-dom";
import img from "../images/home-image2.jpg";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <span className="images">
          <img src={img} className="plane" />
        </span>
        <div className="home-content">
          <div className="welcome">Welcome</div>
          <div className="home-text">
            Find here pictures and a small description for every country in
            Europe
          </div>

          <Link to="/Tours">
            <button className="button">Explore</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
