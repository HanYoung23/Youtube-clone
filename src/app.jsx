import React from "react";
import "./app.css";
import Navbar from "./components/navbar";
import Field from "./components/field";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      fetch: "",
      isLoaded: false,
    };
    this.url = {
      initUrl:
        "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&",
      maxResults: 2,
      key: "AIzaSyDLA3UXgwKGQme2hQFAKbHrZlfsRtha0m4",
    };
  }

  //https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=2&key=AIzaSyDLA3UXgwKGQme2hQFAKbHrZlfsRtha0m4

  createFetchUrl() {}
  componentDidMount() {
    fetch(this.state.fetch)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        console.log(json.items);
        this.setState({
          isLoaded: true,
          items: json.items,
        });
      });
  }

  render() {
    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="app">
          <Navbar />
          <Field items={items} />
        </div>
      );
    }
  }
}

export default App;
