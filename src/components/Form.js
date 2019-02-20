import React from 'react';
import styled, { keyframes } from "styled-components";


const FormBox = styled.div`
  margin: 2rem;
  display: flex;
  align-self: center;
`

const SearchInput = styled.input`
  align-self: flex-start;
  margin: 5px;
  font-family: 'Montserrat', sans-serif;
  width: 0;
  background: #ededed url(https://static.tumblr.com/ftv85bp/MIXmud4tx/search-icon.png) no-repeat 15px center;
  background-size: 15px 15px;

	border: solid 1px #ccc;
  padding: 17px 16px 13px 30px;
  border-radius: 10em;
  transition: all .5s;

  cursor: pointer;
  color: #999;

   :hover {
    background-color: #fff;
    cursor: pointer;
   }

   :focus {
    width: 250px;
    padding-left: 32px;
    color: #000;
    background-color: #fff;
    cursor: auto;

   }
`

const rotate = keyframes`
   from { transform: rotate(0deg);}
   to { transform: rotate(360deg);}
`;


const Button = styled.button`

  margin: 2px;
  text-align: center;

  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-RgGhEcmG-suDJJtexwf63vNS_dKHeMUJPESC4elaVBkjgBBc');
  border: solid 1px #ccc;
  padding: 15px 15px 17px 32px;
  border-radius: 10em;
  transition: all .5s;
  animation: ${rotate} 4s linear infinite;
  color: black;
  width: 50px;
  height: 50px;
  background-size: 48px 48px;
  background-color: #ededed;

  :hover {
    background-color: #fff;
    cursor: pointer;
   }
`


const Form = (props) => {
  return (

  <FormBox>
    <form onSubmit={props.submit}>
      <SearchInput type="text" name="search" placeholder="Pokemon name or id" value={props.value} onChange={props.change}/>
      <Button onClick={props.click}></Button>
    </form>
  </FormBox>
  )
}


export default Form

