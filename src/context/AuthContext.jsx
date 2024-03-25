import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const login = async (username, password) => {
        try {
            const response = await axios.post('https://fakestoreapi.com/auth/login', {
                username,
                password
            });
            setUser(response.data);
            localStorage.setItem('user', JSON.stringify(response.data));
        } catch (error) {
            console.error('Login Failed: ', error);
        }
    }

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    })

    return (
        <AuthContext.Provider value={{ user, login }} >
            {children}
        </AuthContext.Provider>
    )
}