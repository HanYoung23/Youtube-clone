import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div>
        <i className="fas fa-tv"></i>
        Hantube
        <form className="searchBar">
          <input
            className="inputText"
            type="text"
            placeholder="Search.."
          ></input>
          <button></button>
        </form>
      </div>
    );
  }
}

export default Navbar;
