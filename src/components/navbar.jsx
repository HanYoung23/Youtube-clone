import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMousePointer, faSearch } from "@fortawesome/free-solid-svg-icons";

class Navbar extends Component {
  render() {
    return (
      <div className="navBar">
        <a href="/" className="navTitle">
          <FontAwesomeIcon icon={faMousePointer} className="youtubeIcon" />
          Metube
        </a>
        <form className="searchBar">
          <input
            className="inputText"
            type="text"
            placeholder="  Search.."
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
