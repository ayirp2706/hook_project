import React from "react";
import { useState } from "react";

function Hook (){
    const [count , setCount] = useState(1);
    const handleAdd=()=>{
        setCount((prev)=>prev+2);
    };
    const handleSubstract=()=>{
        setCount((prev)=>prev-2);
    }
    return(
        <div>
            <button onClick={handleAdd}>+</button>
            <span>{count}</span>
            <button onClick={handleSubstract}>-</button>
        </div>
    )


}

export default Hook