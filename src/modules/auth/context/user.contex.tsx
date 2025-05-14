import { createContext } from "react";
import { IUser } from "../types";

interface IUserContext{
    user: IUser | null
    token: string | null
    isAuthenticated: ()=> boolean
    setUser: (value: IUser)=> void
    setToken: (value: string) => void
}

const UserContext = createContext<null | IUserContext>(null)

// useUserContext
// UserProvider

// Для реализации функции login и register создаем хук useAuth(либо useLogin, useRegister)



// Модальное окно можно реализовать двумя вариантамм
// 1. Создаете новое окно(у вас создается новая ссылка) и используете свойство presentation (у Screen или Stack)
// 2. Без отдельного окна( не участвует в навигации Expo Router ) и реализуете с помощью бибилотеки react-native-modal (либо стандартная реализация с помощью react-native и компонента Modal)
// react-native-modal https://www.npmjs.com/package/react-native-modal
