import React from 'react';
import styled from "styled-components";

const ListBox = styled.ul`
  margin: .5rem;
  /* padding: .6rem; */
  background: rgba(0,0,0,.4);
  width: 470px;
  border-radius: 1rem;
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);

`
const ListItem = styled.li`
  font-size: 1.2rem;
  margin: .8rem;
  padding: .2rem;
  list-style: none;
  text-align: left;

`






const Result = (props) => {
  const { id, name, height, weight, base_experience, abilities, err, value} = props.pokemon
  let data = null;

  if (!err && name) {
    data = (
      <>
        {/* <h2>Results for Pokemon: {name}</h2> */}

          <ListItem>Id number: {id}</ListItem>
          <ListItem>Pokemon name: {name}</ListItem>
          <ListItem>Weight: {weight}</ListItem>
          <ListItem>Height: {height}</ListItem>
          <ListItem>Base experience: {base_experience}</ListItem>
          <ListItem>Abilities: {abilities}</ListItem>

      </>
    )
  }


  return (
    <>
      <h2>Results for Pokemon: {name}</h2>
      <ListBox>
      {err ? `We do not have a "${value}" in the database :(` : data }
      </ListBox>
    </>
  )



}

export default Result