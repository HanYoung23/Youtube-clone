import React, { Component } from "react";

class Field extends Component {
  createVideo = (videoId) => {
    const link = `https://www.youtube.com/embed/${videoId}`;
    this.props.changeStatus(link);
  };

  render() {
    const items = this.props.items;
    {
      return (
        <ul className="field">
          {items.map((item) => (
            <li key={item.id.videoId} className="itemList">
              <button
                className="itemCard"
                onClick={() => {
                  this.createVideo(item.id.videoId);
                }}
              >
                <img
                  className="itemImg"
                  src={item.snippet.thumbnails.medium.url}
                  alt="thumb"
                  width="300"
                  height="200"
                />
                <div className="itemTitle">{item.snippet.title}</div>
                <div className="channelTitle">{item.snippet.channelTitle}</div>
              </button>
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default Field;
