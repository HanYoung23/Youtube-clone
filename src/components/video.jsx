import React, { Component } from "react";

class Video extends Component {
  render() {
    return (
      <div className="videoField">
        <iframe
          title={this.props.status}
          className="video"
          id="player"
          src={this.props.status}
          frameBorder="0"
          allowFullScreen
        />
        <div className="videoTitle">{this.props.videoDesc.title}</div>
        <div className="videoDesc">{this.props.videoDesc.description}</div>
      </div>
    );
  }
}

export default Video;
