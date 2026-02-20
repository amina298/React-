import React from 'react'

const Button = ({handleClick}) => {
  return( 
    <button onClick={handleClick} style={{
      backgroundColor: "black",
 color:"white"
    }} >Connect with me </button>
  )
}

export default Button;