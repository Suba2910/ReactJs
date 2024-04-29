import { ChangeProfile } from "../components/ChangeProfile";
import { useContext } from "react";
import { AppContext } from "../App";
export const Profile = () => {
    const {user} = useContext(AppContext);
    return (
        <div> PROFILE OF THE USER {user}
            <ChangeProfile />
        </div>
    );
}