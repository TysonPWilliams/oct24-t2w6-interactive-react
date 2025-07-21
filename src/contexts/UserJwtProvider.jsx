import { useState } from "react";
import { UserJwtContext } from "../contexts/UserJwtContext";



export function UserJwtProvider({ children }) {

    let [userJwt, setUserJwt] = useState("");

    // let [userJwt, setUserJwt] = useContext(UserJwtContext);

    return (
        <UserJwtContext.Provider value={[userJwt, setUserJwt]}>
            {children}
        </UserJwtContext.Provider>
    )
}