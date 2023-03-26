import React from 'react'


function ChildComp(props) {
  return (
    <div>
        <button onClick={() => props.greetHandler("Paapu")}>Greet</button>
    </div>
  )
}

export default ChildComp

// Normally we transfer info from parent to child through props but here we are paasing info from child to parent by combining props
 // with a method. In this instance an event called Greet is generated in childcomp but the method greetHandler is a method called 
//  in parentcomp. here through props we transfer the click event from child to parent.