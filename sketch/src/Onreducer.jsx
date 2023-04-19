import React, { useReducer } from 'react'


// Funcion pura
const reducer = (state,action) => {
    if (action.type ==="increment"){
        return state+1
    }
    
    if (action.type ==="decrement"){
        return state-1
    }  

    if (action.type ==="reset"){
      return 0
  }  

  return state
};

export const Onreducer = () => {

    const [counter, dispatch] = useReducer(reducer, 4);

  return (
    <>
      <h1> Clicks: {counter} </h1>
      <button onClick={() => dispatch({type:"increment"})}>
       Increment  
      </button>

      <button onClick={()=> dispatch({type:"decrement"})}>
       Decrement 
      </button>
      <button onClick={()=> dispatch({type:"reset"})}>
       Reset 
      </button>
    </>
  )
}
