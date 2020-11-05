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
      isLoaded: false,
      fetch: "https://jsonplaceholder.typicode.com/todos/1",
    };
  }

  //fetch 결과 수정하기

  componentDidMount() {
    fetch(this.state.fetch)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json,
        });
      });
    console.log(this.state.fetch);
  }

  render() {
    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="app">
          <Navbar
            fetch={(fetchUrl) => {
              this.setState({ fetch: fetchUrl });
              console.log(this.state.fetch);
            }}
          />
          <Field items={items} />
        </div>
      );
    }
  }
}

export default App;
