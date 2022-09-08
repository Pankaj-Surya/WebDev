import React from 'react'

function CounterReducer() {
    const [count,setCount]=React.useState(0);

    return (
    <>
        <h1>CounterReducer</h1>
        <h2>{count}</h2>
        <br />
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        <button>+5</button>
        <button>-5</button>
    </>
        
  )
}

export default CounterReducer