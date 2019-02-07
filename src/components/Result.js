import React from 'react';

const Result = (props) => {
  const { id, name, height, weight, base_experience, abilities, images, err, value} = props.pokemon

  let data = null;

  if (!err && name) {
    data = (
      <>
        <h3>
          Results for Pokemon: {name}
        </h3>
        <li>Id number: {id}</li>
        <li>Pokemon name: {name}</li>
        <li>Weight: {weight}</li>
        <li>Height: {height}</li>
        <li>Base experience: {base_experience}</li>
        <li>Abilities: {abilities}</li>
        <img src={images} alt={name}/>
      </>
    )
  }


  return (
    <ul className="result">
    {err ? `We do not have a "${value}" in the database :(` : data }
    </ul>
  )



}

export default Result