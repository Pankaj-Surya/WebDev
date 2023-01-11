import React, { useMemo, useState } from 'react'

const UseMemo = () => {
 
 const [counterOne,setCounterOne] = useState(0);
 const [counterTwo,setCounterTwo] = useState(0);
 
//  const isEven  = () =>{
//     console.log("in even")
//     let i;
//     while( i<200000000000000000000000000000000000) i++;
//     console.log("out of even")
//     return (counterOne % 2 === 0);
   
//  }


const isEven = useMemo(()=>{
    console.log("in even memo")
    let i;
    while( i<200000000000000000000000000000000000) i++;
    console.log("out of  meomo")
    return (counterOne % 2 === 0);      
},[counterOne])
 
 const IncrementOne = () =>{
    console.log("click 1")
    setCounterOne(counterOne+1);
 }

 const IncrementTwo = () =>{
  setCounterTwo(counterTwo+1)
 }

 return (

    <div>
        <h2>{isEven ? "Even" : "Odd"}  </h2>
        <h1>Counter 1 : {counterOne}</h1>
        <button onClick={IncrementOne} >Counter 1</button>
        <br />
        <h1>Counter 2 : {counterTwo}</h1>
        <button onClick={IncrementTwo} >Counter 2</button>
    </div>
  )
}

export default UseMemo