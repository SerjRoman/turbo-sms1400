import { createContext, ReactNode, useContext, useState } from "react";
import { IUser } from "../types";

interface IUserContext{
    user: IUser | null
    token: string | null
    isAuthenticated: ()=> boolean
    setUser: (value: IUser)=> void
    setToken: (value: string) => void
}

const UserContext = createContext<null | IUserContext>(null)

export function useUserContext(){ 
    return useContext(UserContext)
}

interface IUserContextProviderProps{
    children?: ReactNode
}

export function UserContextProvider(props: IUserContextProviderProps){
    const [user, setUser] = useState<IUser | null>(null)
    const [token, setToken] = useState<string | null>(null)

    return <UserContext.Provider
        value={{
            user: user,
            token: token,
            isAuthenticated: () => false,
            setUser: setUser,
            setToken: setToken,
        }}>

        {props.children}
    </UserContext.Provider> 
}



