import React, { Component } from "react";
import Video from "./video";

class Field extends Component {
  render() {
    const items = this.props.items;
    return (
      <div className="field">
        {/* {items.map((item) => ( */}
        <li key={items.id}>
          <div>
            <img src="favicon.png" alt="thumb" />
          </div>
          <div>{items.title}</div>
          <div>{items.title}</div>
        </li>
        <Video items={this.props.items} />
      </div>
    );
  }
}

export default Field;
