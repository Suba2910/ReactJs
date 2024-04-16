import { useState, useEffect } from "react";

//useEffect gets called even when updating. To restrict only for a specific 
//action, we can give what props or state changes (useState) on which useEffect to be called 
//inside the array in line 10. empty array for only when the component mounts
export const Text = () => {
    const [text, setText] = useState("");
    useEffect(() => {
        console.log("Component Mounted");
        return () => {
            console.log("Component UnMounted");
        };
    },[text])
    return (
        <div>
        <input onChange={ (event) => {
            setText(event.target.value);
        }}></input>
        <h1>{text} </h1>
        </div>
    );
}

