import React from 'react';
import styled from 'styled-components';
const ImgBox = styled.div`
  margin: 1.5rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;

`;

const ImgItem = styled.img`
  align-self: flex-start;
  width: 180px;
  height: 180px;



`;

const Photo = (props) => {

  const imgs = props.photo.images.map(img => (
    <>
    <div key={img.id}>
      <h4>{img.name}</h4>
      <ImgItem src={img.src} alt={img.name}/>
    </div>
    </>
    ))
    return (
      <ImgBox>
        {imgs}
      </ImgBox>
    )

}


export default Photo