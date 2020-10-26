import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTv } from "@fortawesome/free-solid-svg-icons";

class Navbar extends Component {
  render() {
    return (
      <div>
        <FontAwesomeIcon icon={faTv} className="tvIcon" />
        Hantube
        <form className="searchBar">
          <input
            className="inputText"
            type="text"
            placeholder="Search.."
          ></input>
          <button>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </div>
    );
  }
}

export default Navbar;
