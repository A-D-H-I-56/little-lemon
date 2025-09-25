import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // Check if user is logged in on app start
    useEffect(() => {
        const savedUser = localStorage.getItem('littleLemonUser');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
        setIsLoading(false);
    }, []);

    // Get all registered users from localStorage
    const getRegisteredUsers = () => {
        const users = localStorage.getItem('littleLemonUsers');
        return users ? JSON.parse(users) : [];
    };

    // Save registered users to localStorage
    const saveRegisteredUsers = (users) => {
        localStorage.setItem('littleLemonUsers', JSON.stringify(users));
    };

    // Register a new user
    const register = (userData) => {
        const users = getRegisteredUsers();
        const existingUser = users.find(u => u.email === userData.email);
        
        if (existingUser) {
            throw new Error('User with this email already exists');
        }

        const newUser = {
            id: Date.now().toString(),
            name: userData.name,
            email: userData.email,
            password: userData.password, // In real app, this should be hashed
            registeredAt: new Date().toISOString()
        };

        users.push(newUser);
        saveRegisteredUsers(users);
        return newUser;
    };

    // Login with email and password validation
    const login = (email, password) => {
        const users = getRegisteredUsers();
        const user = users.find(u => u.email === email && u.password === password);
        
        if (!user) {
            throw new Error('Invalid email or password');
        }

        const loginData = {
            id: user.id,
            name: user.name,
            email: user.email,
            loginTime: new Date().toISOString()
        };

        setUser(loginData);
        localStorage.setItem('littleLemonUser', JSON.stringify(loginData));
        return loginData;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('littleLemonUser');
    };

    const isAuthenticated = () => {
        return user !== null;
    };

    const value = {
        user,
        login,
        register,
        logout,
        isAuthenticated,
        isLoading
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
