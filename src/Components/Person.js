import React from 'react'

function Person({person}) {
  return (
    <div>
       <h1> My name is {person.name} and I earn {person.salary} salary per month.</h1>
    </div>
  )
}

export default Person