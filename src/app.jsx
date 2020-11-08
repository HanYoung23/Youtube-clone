import React from "react";
import "./app.css";
import Navbar from "./components/navbar";
import Field from "./components/field";
import Video from "./components/video";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoad: false,
      maxResults: 5,
      status: "",
    };
  }

  //https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=2&key=AIzaSyDLA3UXgwKGQme2hQFAKbHrZlfsRtha0m4

  componentDidMount = (inputValue) => {
    const max = this.state.maxResults;
    const q = inputValue;
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${max}&q=${q}&key=AIzaSyDLA3UXgwKGQme2hQFAKbHrZlfsRtha0m4`
    )
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        this.setState({
          items: json.items,
          isLoad: true,
        });
      });
  };

  render() {
    {
      if (this.state.isLoad === false) {
        return <div>Loading...</div>;
      } else if (this.state.isLoad === true) {
        return (
          <div className="app">
            <Navbar
              url={(inputValue) => {
                this.componentDidMount(inputValue);
              }}
            />

            {this.state.status !== "" && <Video status={this.state.status} />}
            <Field
              items={this.state.items}
              status={this.state.status}
              changeStatus={(status) => {
                this.setState({ status: status });
              }}
            />
          </div>
        );
      }
    }
  }
}

export default App;
