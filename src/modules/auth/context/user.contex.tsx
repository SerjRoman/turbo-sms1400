import { createContext, ReactNode, useContext, useEffect, useState } from "react";
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



// Модальное окно можно реализовать двумя вариантамм
// 1. Создаете новое окно(у вас создается новая ссылка) и используете свойство presentation (у Screen или Stack)
// 2. Без отдельного окна( не участвует в навигации Expo Router ) и реализуете с помощью бибилотеки react-native-modal (либо стандартная реализация с помощью react-native и компонента Modal)
// react-native-modal https://www.npmjs.com/package/react-native-modal
