import { Component } from "react";
import React from "react";
import { Link } from "react-router-dom";
import "./NavBarStyle.css";
import { navitems } from "./navitems";
class Navbar extends Component {
  state = { clicked: false };
  handleclick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="navelements">
        <Link to="/" className="nav-logo">
          React project <i className="fa fa-globe" />
        </Link>
        <div className="menu-cons" onClick={this.handleclick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {navitems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.class} to={item.url}>
                  <i class={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
