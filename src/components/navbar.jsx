import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

class Navbar extends Component {
  sendInputValue() {
    let input = document.querySelector("input").value;
    if (input !== "") {
      this.props.url(input);
      document.querySelector("input").value = "";
    }
  }

  preventDefault = (e) => {
    e.preventDefault();
  };

  pressKey = (key) => {
    if (key.keyCode !== 13) {
      return;
    } else if (key.keyCode === 13) {
      this.sendInputValue();
    }
  };

  render() {
    return (
      <div className="navBar">
        <span href="#" className="navTitle">
          <FontAwesomeIcon
            icon={faYoutube}
            className="youtubeIcon"
            width="40"
          />
          Hantube
        </span>
        <form
          className="searchBar"
          onClick={(e) => {
            this.preventDefault(e);
          }}
        >
          <input
            className="inputText"
            type="text"
            placeholder="  Search.."
            onKeyDown={(key) => {
              this.pressKey(key);
            }}
          ></input>
          <button className="inputBtn">
            <FontAwesomeIcon
              icon={faSearch}
              onClick={(e) => {
                this.sendInputValue();
                this.preventDefault(e);
              }}
            />
          </button>
        </form>
      </div>
    );
  }
}

export default Navbar;
