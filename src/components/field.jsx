import React, { Component } from "react";
import Video from "./video";

class Field extends Component {
  render() {
    return (
      <div className="field">
        <ul className="videoList">
          <li className="videos"></li>
        </ul>
        <Video />
      </div>
    );
  }
}

export default Field;
