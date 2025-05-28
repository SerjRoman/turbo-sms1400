<<<<<<< HEAD
import { createContext, ReactNode, useContext, useState } from "react";
=======
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
>>>>>>> 9077ee6307b54c97f70072c1feecbb45f3c6850a
import { IUser } from "../types";

interface IUserContext{
    user: IUser | null
    token: string | null
    isAuthenticated: ()=> boolean
    setUser: (value: IUser)=> void
    setToken: (value: string) => void
}

const initialValue: IUserContext = {
    user: null,
    token:  null,
    isAuthenticated: () => false,
    setUser: () => {},
    setToken: () => {},
}

const UserContext = createContext<IUserContext>(initialValue)

<<<<<<< HEAD
export function useUserContext(){
    const ctx = useContext(UserContext)
    if (!ctx){
        throw Error("Context is not provider")
    }
    return ctx
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
=======
// useUserContext
export function useUserContext(){
    return useContext(UserContext)
}



// UserProvider

export function UserContextProvider(children: ReactNode){
    const [user, setUser] = useState<IUser | null>(null)
    const [token, setToken] = useState<string | null>(null)

    function isAuthenticated(){
        if (user === null) return false
        return true
    }


    return (
        <UserContext.Provider
        value={{
            user,
            token,
            isAuthenticated,
            setUser,
            setToken,
        }}
        >
        {children}
        </UserContext.Provider>
    );
    
}


// Для реализации функции login и register создаем хук useAuth(либо useLogin, useRegister)
>>>>>>> 9077ee6307b54c97f70072c1feecbb45f3c6850a



