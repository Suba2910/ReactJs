import { getValue } from "@testing-library/user-event/dist/utils";
import { useState } from "react";

export function InputDisplay () {
    const [inputvalue, setInputValue] = useState("");
    // to fetch the input text box 
    const handle = (event) => {
        setInputValue(event.target.value);
    };

    return ( <div className="App">
        <input type = "text" onChange={handle}></input>
        <h1> Input : {inputvalue}</h1>

    </div> 
    
    );
    

}