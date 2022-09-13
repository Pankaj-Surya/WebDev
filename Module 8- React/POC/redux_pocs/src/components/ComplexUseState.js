import React from 'react'

function ComplexUseState() {
    let [count,setCount]=React.useState(0);
    let [val,setValue]=React.useState("");

    // let [inpcolor,setInpColor]=React.useState("");
    let [color,setColor]=React.useState("");
    
    function ValChangeFn(e){
        let vl= e.target.value;
        setValue(vl);
    }

    function ChangeColorFn(e){
        let col = e.target.value;
        setColor(col)
    }

    return (
    <>
        <h1>ComplexUseState</h1>
        <h2 style={{color:color}}>{count}</h2>
        <br />
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        <button>+5</button>
        <button>-5</button>
        <br />
        <br />
        
        <input type="text" value={val} onChange={ValChangeFn} />
        
     <button onClick={()=>setCount(val)}>SetVal</button>
     <br />
     
     {/* <input type="text" value={color} onChange={ChangeColorFn} />
     <button onClick={setColor(color)}>SetColor</button> */}
    </>
        
  )
}

export default ComplexUseState