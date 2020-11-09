import React, { Component } from "react";

class Video extends Component {
  render() {
    return (
      <div className="videoField">
        <iframe
          className="video"
          id="player"
          src={this.props.status}
          frameBorder="0"
          allowFullScreen
        />
        <div className="videoDesc">{this.props.videoDesc}</div>
      </div>
    );
  }
}

export default Video;
