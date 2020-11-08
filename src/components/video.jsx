import React, { Component } from "react";

class Video extends Component {
  render() {
    return (
      <iframe
        id="player"
        width="640"
        height="360"
        src={this.props.status}
        frameBorder="0"
        allowFullScreen
      />
    );
  }
}

export default Video;
