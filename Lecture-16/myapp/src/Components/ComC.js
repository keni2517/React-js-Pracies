import React, { useContext } from 'react';
import { Context1 } from '../App';

function ComC() {
    const name = useContext(Context1)
  return (

    <div>This is a.......{name}</div>
  )
}

export default ComC