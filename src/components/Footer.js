import React, { Component } from 'react';
import {BrowserRouter, Link} from "react-router-dom";
import styled from 'styled-components';
import posed from 'react-pose';

const StyledWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  width: 50px;
  height: 50px;
  margin: 30px;
  transition: ease-in-out .8s;

  :hover {
    transform: scale(1.3);
  }
`


const Footer = () => {
  return (
      <StyledWrapper><StyledLink to={`/info`}><img src='https://image.flaticon.com/icons/svg/1/1176.svg' alt='info'></img></StyledLink></StyledWrapper>
    )
  }

export default Footer;