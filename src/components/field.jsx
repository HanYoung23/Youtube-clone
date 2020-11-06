import React, { Component } from "react";
import Video from "./video";

class Field extends Component {
  render() {
    const items = this.props.items;
    return (
      <div className="field">
        {items.map((item) => (
          <li key={item.id.videoId}>
            <img
              src={item.snippet.thumbnails.medium.url}
              alt="thumb"
              width="300"
              height="200"
            />
            <div>{item.snippet.title}</div>
            <div>{item.snippet.channelTitle}</div>
          </li>
        ))}
        <Video items={this.props.items} />
      </div>
    );
  }
}

export default Field;
