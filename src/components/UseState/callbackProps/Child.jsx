import React from 'react'

function Child({info}) {

    const data='In React.js, passing data from a child component to its parent component is typically done through a callback function that is passed as a prop from the parent to the child. This pattern is commonly referred to as "lifting state up" or "callback props." ';

  return (
  <>
    {info && <div>
      <h3>Info : </h3>
         <p>{data}</p>
      </div>
    }
  </>
  )
}

export default Child;