import React, { Component } from "react";
import Result from "./Result";
import Form from "./Form";
import "./App.css";

class App extends Component {
  state = {
    value: "",
    randomNumber: "",
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
        this.setState(prevState => ({
          randomNumber: this.randomNumberId,
          id: data.id,
          name: data.name,
          height: data.height,
          weight: data.weight,
          base_experience: data.base_experience,
          abilities: data.abilities[0].ability.name,
          images: data.sprites.front_default,
          err: false,
        }))
      })
      .catch(err => {
        console.log(err)
        this.setState(prevState => ({
          err: true,
        }))
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
        this.setState(prevState => ({
          id: data.id,
          name: data.name,
          height: data.height,
          weight: data.weight,
          base_experience: data.base_experience,
          abilities: data.abilities[0].ability.name,
          images: data.sprites.front_default,
          err: false,
        }))
      })
      .catch(err => {
        console.log(err)
        this.setState(prevState => ({
          err: true,
        }))
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
          pokemon={this.state}/>
      </>
    );
  }
}

export default App;
