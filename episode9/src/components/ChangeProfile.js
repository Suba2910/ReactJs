import { useState, useContext } from "react";
import { AppContext } from "../App";


export const ChangeProfile = () => {
    const { setUser } = useContext(AppContext);
    const [newUser, setNewUser] = useState("");
    return (
        <div>
            <input onChange={(event) => {
                setNewUser(event.target.value);
            }} />
            <button onClick = { () => {
                setUser(newUser);
            }}> CHANGE USER </button>
        </div>
    );
}