import React, { Component } from "react";
import Result from "./Result";
import Form from "./Form";
import "./App.css";

class App extends Component {
  state = {
    value: "",
    data: "",
    id: "",
    name: "",
    height: "",
    weight: "",
    base_experience: "",
    abilities: "",
    images: "",
    err: false,
  };

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  handleClickRnd = e => {
    e.preventDefault();
    let randomNumberId = Math.floor(Math.random() * 807 + 1);
    console.log(randomNumberId);
    const randomAPI = `https://pokeapi.co/api/v2/pokemon/${randomNumberId}/`;
    fetch(randomAPI)
      .then(response => {
        if (response.ok) {
          console.log(response);
          return response;
        }
        throw Error(response.status);
      })
      .then(response => response.json())
      .then(data => {
        this.setState({
          err: false,
          data: data.result,
        });
      })
      .catch(err => {
        console.log(err + " something was wrong");
        this.setState ({
          err: true
        });
      })
    }
  handlePokemonSubmit = e => {
    console.log("wysłane");
    e.preventDefault();
    const API = `https://pokeapi.co/api/v2/pokemon/${this.state.value}/`;
    fetch(API)
      .then(response => {
        if (response.ok) {
          console.log(response);
          return response;
        }
        throw Error(response.status);
      })
      .then(response => response.json())
      .then(data => {
        this.setState({
          err: false,
          data: data.result,
        });
      })
      .catch(err => {
        console.log(err + " something was wrong");
        this.setState ({
          err: true
        });
      })
  }

  render() {
    return (
      <>
        <Form
          value={this.state.value}
          change={this.handleChange}
          submit={this.handlePokemonSubmit}
          click={this.handleClickRnd}
        />
        <Result
          error={this.state.err}/>
      </>
    );
  }
}

export default App;
