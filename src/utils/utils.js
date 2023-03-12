import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import userDetails from '../modules/User/userDetails';

function ProtectedRoute({ element: Component, ...rest }) {
    const isAuthenticated = userDetails.getUserDetails();
    return (
        <Route
            {...rest}
            element={isAuthenticated ? <Component /> : <Navigate to="/" />}
        />
    );
}

export default ProtectedRoute;
