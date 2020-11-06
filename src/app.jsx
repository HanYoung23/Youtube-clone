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
      isLoad: false,
      fetch: "",
      q: "",
      maxResults: 2,
    };
  }

  //https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&q=bts&key=AIzaSyDLA3UXgwKGQme2hQFAKbHrZlfsRtha0m4

  setFetch() {
    const { q, maxResults } = this.state;
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&q=${q}&key=AIzaSyDLA3UXgwKGQme2hQFAKbHrZlfsRtha0m4`;
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        console.log(json.items);
        this.setState({
          items: json.items,
          isLoad: true,
        });
      });
  }

  render() {
    {
      if (this.state.isLoad === false) {
        this.setFetch();
      }
      if (this.state.isLoad === true) {
        return (
          <div className="app">
            <Navbar
              url={(search) => {
                console.log(search);
                this.setState({ q: search });
                this.setState(this.state);
                console.log(this.state.fetch);
              }}
            />
            <Field items={this.state.items} />
          </div>
        );
      }
    }
  }
}

export default App;
