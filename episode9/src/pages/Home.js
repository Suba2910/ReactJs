import { useContext } from "react";
import { AppContext } from "../App";
export const Home = () => {
    const {user} = useContext(AppContext);
    return <h1> THIS IS THE HOME PAGE AND USER IS {user}</h1>;
}