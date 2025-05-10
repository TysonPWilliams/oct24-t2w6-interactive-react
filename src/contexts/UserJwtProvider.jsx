import { UserJwtContext } from "../contexts/UserJwtContext";



export function UserJwtProvider({ children }) {

    return (
        <UserJwtContext.Provider value={"Example jwt value"}>
            {children}
        </UserJwtContext.Provider>
    )
}