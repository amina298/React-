import React from 'react'

const Greeting = ({name, age, country}) => {
  return (
      <div>Hello my name is {name}, I am {age} years old from {country}!</div>
  )
}

export default Greeting