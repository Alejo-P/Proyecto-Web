import { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    
    // Funciones para el inicio de secion y registro de un usuario
    const login = async (form) => {
        try {
            const response = await axios.post('http://localhost:3000/api/login', form)
            const data = await response.data
            setUser(data)
            return true
        } catch (error) {
            console.log(error)
            return false
        }
    }

    const register = async (form) => {
        try {
            const response = await axios.post('http://localhost:3000/api/register', form)
            const data = await response.data
            setUser(data)
            return true
        } catch (error) {
            console.log(error)
            return false
        }
    }

    return (
        <AuthContext.Provider value={{
                user,
                setUser,
                login,
                register
            }}>
        {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };