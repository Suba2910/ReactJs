
import { useState } from "react";


export const ChangeProfile = () => {
    
    const [newUser, setNewUser] = useState("");
    return (
        <div>
            <input onChange={(event) => {
                setNewUser(event.target.value);
            }} />
            <button> CHANGE USER </button>
        </div>
    );
}