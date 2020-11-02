import React from "react";
import "./app.css";
import Navbar from "./components/navbar";
import Field from "./components/field";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoNum: 20,
      videos: [],
    };
  }

  render() {
    return (
      <div className="screen">
        <Navbar />
        <Field
          videoNum={this.state.videoNum}
          videos={this.state.videos}
          createVideos={(videos) => {
            this.setState({ videos: videos });
          }}
        />
      </div>
    );
  }
}

export default App;
