import React from "react";
import { Link } from "react-router-dom";


class TopBar extends React.Component {
  linkStyle = () => {
    const styleLink = {
      color: "white",
    };
    return styleLink;
  };

  render() {
    return (
      <nav className="nav-top">
        <Link to="/" style={this.linkStyle()}>
          <h3>Logo</h3>
        </Link>
        <ul className="nav-links">
          <Link to="/" style={this.linkStyle()}>
            <li>
              <button className="active-link">Home</button>
            </li>
          </Link>
          <Link to="/About" style={this.linkStyle()}>
            <li>
              <button className="active-link">About</button>
            </li>
          </Link>
          <Link to="/Tours" style={this.linkStyle()}>
            <li>
              <button className="active-link">Tours</button>
            </li>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default TopBar;
