import { createContext, useContext, useState } from "react";
import { registerRequest } from '../api/auth'

export const AuhtContext = createContext();

export const useAuth = () => {

    const context = useContext(AuhtContext);
    if (!context) {
        throw new Error('Use Auth must be used within an AuthProvider');
    }

    return context;

}

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors , setErrors] = useState([])

    const signup = async (user) => {

        try {
            const res = await registerRequest(user)
            console.log(res);
            setUser(res.data);
            setIsAuthenticated(true);
        }catch(error){
            setErrors(error.response.data)
        }
        

    }


    return (
        <AuhtContext.Provider value={{
            signup,
            user,
            isAuthenticated,
            errors
        }}>

            {children}
        </AuhtContext.Provider>
    )
}