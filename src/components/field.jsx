import React, { Component } from "react";

class Field extends Component {
  createVideo = (item) => {
    console.log(item);
    const videoId = item.id;
    const link = `https://www.youtube.com/embed/${videoId}`;
    const videoDesc = item.snippet;
    this.props.changeStatus(link, videoDesc);
  };

  render() {
    const items = this.props.items;
    {
      return (
        <ul className="field">
          {items.map((item) => (
            <li key={item.id} className="itemList">
              <button
                className="itemCard"
                onClick={() => {
                  this.createVideo(item);
                }}
              >
                <img
                  className="itemImg"
                  src={item.snippet.thumbnails.medium.url}
                  width="400"
                  alt="thumb"
                />
                <div className="channelTitle">{item.snippet.channelTitle}</div>
                <div className="itemTitle">{item.snippet.title}</div>
              </button>
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default Field;
