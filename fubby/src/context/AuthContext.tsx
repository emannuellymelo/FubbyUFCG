import { ReactNode, createContext, useEffect, useReducer } from "react";
import  AuthReducer  from "./AuthReducer";

const loadUserFromLocalStorage = () => {
    const userJSON = localStorage.getItem("user");
    if (userJSON) {
      return JSON.parse(userJSON);
    }
    return null;
  };

const INITIAL_STATE = {
    currentUser: loadUserFromLocalStorage()
}

interface AuthContextType {
    currentUser: any; // Substitua "any" pelo tipo correto do seu usuário
    dispatch: React.Dispatch<any>;
}

export const AuthContext = createContext<AuthContextType>({ currentUser: INITIAL_STATE.currentUser, dispatch: () => {} });

interface AuthContextProviderProps {
    children: ReactNode;
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.currentUser))
    }, [state.currentUser])

    return (
        <AuthContext.Provider value={{ currentUser: state.currentUser, dispatch }}>
            { children }
        </AuthContext.Provider>
    )
}