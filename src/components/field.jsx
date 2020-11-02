import React, { Component } from "react";
import Video from "./video";

class Field extends Component {
  render() {
    return (
      <div className="field">
        <Video
          videoNum={this.props.videoNum}
          videos={this.props.videos}
          createVideos={this.createVideos}
        />
      </div>
    );
  }
}

export default Field;
