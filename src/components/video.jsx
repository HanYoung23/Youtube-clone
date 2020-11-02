import React, { Component } from "react";

class Video extends Component {
  render() {
    let videos = this.props.videos;
    const listItems = videos.map((video) => <li>{video}</li>);

    return <ul className="videoList">{listItems}</ul>;
  }
}

export default Video;
