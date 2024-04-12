
import { useState } from "react";

export function Counter (){
    const [count,setCount] = useState(0);



    return (
        <div className="App">
        <button onClick = { () => {setCount(count + 1)}}> Increment</button>
        <button onClick = { () => {setCount(count - 1)}}> Decrement </button>
        <button onClick={() => {setCount(0)}}> Set To Zero </button>
        {count}
        </div>
    );
}