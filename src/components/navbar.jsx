import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTv } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

class Navbar extends Component {
  render() {
    return (
      <div className="navBar">
        <FontAwesomeIcon icon={faYoutube} className="youtube" />
        <span className="navTitle">한영튜브</span>
        <form className="searchBar">
          <input
            className="inputText"
            type="text"
            placeholder="Search.."
          ></input>
          <button className="inputBtn">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </div>
    );
  }
}

export default Navbar;
