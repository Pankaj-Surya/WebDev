import React, { useCallback, useState } from 'react'
import Child from './Child';

const Parent = () => {
    const [counterOne,setCounterOne] = useState(0);
    const [counterTwo,setCounterTwo] = useState(0);
    
    
    const IncrementOne = () =>{
       console.log("click 1")
       setCounterOne(counterOne+1);
    }

   
   const fun = useCallback(()=>{
    console.log("hello fun")
},[counterTwo])
   
    // const IncrementTwo = () =>{
    //  setCounterTwo(counterTwo+1)
    // }
   
    return (
   
       <div>
           <Child counterTwo={counterTwo} fun={fun}/>
           <button onClick={IncrementOne} >Counter 1</button>
           <br />
        </div>
  )
}

export default Parent