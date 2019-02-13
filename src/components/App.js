import React, { Component } from "react";
import styled from "styled-components";
import {BrowserRouter, Link} from "react-router-dom"
import Result from "./Result";
import Form from "./Form";
import Title from "./Title";
import Photo from "./Photo";
import Footer from "./Footer";
import "./App.css";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  background-image: linear-gradient(
    to right top,
    #051937,
    #004d7a,
    #008793,
    #00bf72,
    #a8eb12
  );
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100%;
  text-align: center;
  margin: 0 auto;
  color: white;
  font-size: 1rem;
`;
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
    images: [],
    err: false
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
          images: [
            { name: "front", id: 0, src: data.sprites.front_default },
            { name: "back", id: 1, src: data.sprites.back_default },
            // { name: "front female", id: 2, src: data.sprites.front_female },
            // { name: "back female", id: 3, src: data.sprites.back_female }
          ],
          err: false
        }));
      })
      .catch(err => {
        console.log(err);
        this.setState(prevState => ({
          err: true
        }));
      });
  };
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
          randomNumber: this.randomNumberId,
          id: data.id,
          name: data.name,
          height: data.height,
          weight: data.weight,
          base_experience: data.base_experience,
          abilities: data.abilities[0].ability.name,
          images: [
            { name: "front", id: 0, src: data.sprites.front_default },
            { name: "back", id: 1, src: data.sprites.back_default },
            // { name: "front female", id: 2, src: data.sprites.front_female },
            // { name: "back female", id: 3, src: data.sprites.back_female }
          ],
          err: false
        }));
      })
      .catch(err => {
        console.log(err);
        this.setState(prevState => ({
          err: true
        }));
      });
  };

  render() {
    return (
      <BrowserRouter>
      <StyledWrapper>
        <Title />
        <Form
          value={this.state.value}
          change={this.handleChange}
          submit={this.handlePokemonSubmit}
          click={this.handleClickRnd}
        />
        <Result pokemon={this.state} />
        <Photo photo={this.state} />
        <Footer />
      </StyledWrapper>
      </BrowserRouter>
    );
  }
}

export default App;
