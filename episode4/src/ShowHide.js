import { useState } from "react";

export function ShowHide (){
    const [showText, setShowText] = useState(true);

    return  (
    <div className="App">
    <button onClick={() =>{setShowText(!showText)}}>SHOW / HIDE</button>
    {showText && <h1> Hi , This is Suba!!!</h1>}
    </div>
    );
}

export function ColorChange() {
    const [textColor, setTextColor] = useState("black");

    return  (
    <div className="App">
    <button onClick={() =>{setTextColor(textColor === "black" ? "red":"black")}}>SHOW / HIDE</button>
    <h1 style = {{color : textColor}}> Hi , This is Suba!!!</h1>
    </div>
    );
}