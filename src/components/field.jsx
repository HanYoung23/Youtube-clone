import React, { Component } from "react";
import Video from "./video";

class Field extends Component {
  render() {
    const items = this.props.items;
    return (
      <div className="field">
        {items.map((item) => (
          <li key={item.id}>
            <div>
              <img src={item.snippet.thumbnails.standard.url} alt="thumb" />
            </div>
            <div>{item.snippet.title}</div>
            <div>{item.snippet.description}</div>
          </li>
        ))}
        <Video items={this.props.items} />
      </div>
    );
  }
}

export default Field;
