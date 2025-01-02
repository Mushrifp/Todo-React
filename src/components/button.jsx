import React from 'react'

export default function button(props) {

   const increment = ()=>{
        props.setCount(c)
   }

  return (
    <div>
        <button onClick={increment} >Click</button>
    </div>
  )
}
