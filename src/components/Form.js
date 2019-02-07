import React from 'react';


const Form = (props) => {
  return (
  <>
    <form onSubmit={props.submit}>
      <input type="text" name="search" placeholder="Pokemon name or id" value={props.value} onChange={props.change}/>
      <button>Search</button>
    </form>
    <button onClick={props.click}>Random ID</button>
  </>
  )
}


export default Form