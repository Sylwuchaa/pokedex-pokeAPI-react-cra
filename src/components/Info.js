import React, { Component } from 'react';
import styled from 'styled-components';


const InfoBox = styled.div`
  margin: .2rem;
  background: rgba(0,0,0,.4);
  width: 490px;

  border-radius: 1rem;
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);





`


const Info = () => (
  <>
  <InfoBox>
  <h3>Info</h3>
  <p>This a small Pokémon Encyclopedia written in React.js and Create-React-App, using external data APIs from <a href="https://pokeapi.co/">https://pokeapi.co/</a></p>
  </InfoBox>
  </>
)

export default Info
