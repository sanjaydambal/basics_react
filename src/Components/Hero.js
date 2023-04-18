import React from 'react'

function Hero({heroname}) {
    if(heroname==="Thanos"){
        throw new Error ("Something is wrong")
    }
  return (
    <div>{heroname}</div>
  )
}

export default Hero