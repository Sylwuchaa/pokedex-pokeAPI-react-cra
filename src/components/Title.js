import React from 'react';
import styled from 'styled-components';
import {BrowserRouter, Link} from "react-router-dom"

const Wrapper = styled.div`

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: flex-start;

`
const Header = styled.h1`
  display: flex;
  align-self: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 1.5rem 4rem;
  align-self: baseline;
  font-size: 1.8rem;
  text-shadow: 3px 3px #FA3E5C;
`

const StyledLink = styled(Link)`
  display: flex;

  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  color: white;
  text-decoration: none;

  transition: ease-in-out .8s;

  :hover {
    transform: scale(1.1);
  }
`

const Title = () => (
    <>
    <Wrapper>
      <StyledLink exact to={'/'} ><Header>Pokedex</Header></StyledLink>
    </Wrapper>
    </>
)

export default Title