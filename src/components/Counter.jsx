import React from "react";


const Counter =()=>{
    const [count,setCount,color]=React.useState(0)

    return (
        <div>
            <h1>Counter</h1>
            <h2 style={{color:count%2===0?"green":"red"}}>{count}</h2>
            <button onClick={()=>setCount(count + 1)}>Increament</button>
            <button onClick={()=>setCount(count -1)}>Decreament</button>
            <button onClick={()=>setCount(count *2)}>Double</button>
            
        </div>
    )

}



export {Counter}