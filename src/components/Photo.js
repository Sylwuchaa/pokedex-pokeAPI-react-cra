import React from 'react';


const Photo = (props) => {

  const imgs = props.photo.images.map(img => (
    <>
    <div key={img.id}>
      <h4>{img.name}</h4>
      <img src={img.src} alt={img.name}/>
    </div>
    </>
    ))
    return (
      <div>
        {imgs}
      </div>
    )

}


export default Photo