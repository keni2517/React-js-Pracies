import React, { useReducer } from 'react'

var int = 0;

const reducer = (state,action) => {
  if(action.type == "increment"){
    return state + 1;
  }
  if(action.type == "decrement"){
    return state - 1;
  }
  return state
}

function Usereduce() {
  const [state , dispatch] = useReducer(reducer,int)
  return (
    <div>
      {state}
      <br></br>
      <button onClick={()=>dispatch({type:"increment"})}>increment</button>
      <button onClick={()=>dispatch({type:"decrement"})}>decrement</button>
    </div>
  )
}

export default Usereduce