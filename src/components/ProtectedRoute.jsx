import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, isLoading } = useAuth();

    if (isLoading) {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '50vh',
                fontSize: '18px',
                color: '#495E57'
            }}>
                Loading...
            </div>
        );
    }

    if (!isAuthenticated()) {
        // Store the intended destination for redirect after login
        const currentPath = window.location.pathname;
        return <Navigate to={`/login?redirect=${encodeURIComponent(currentPath)}`} replace />;
    }

    return children;
};

export default ProtectedRoute;
