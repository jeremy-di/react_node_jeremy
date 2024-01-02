import React from 'react';
import { Navigate } from 'react-router-dom';
import { userService } from '@/_services/userService';

const Gardien = ({children}) => {
    if (!userService.isConnected()) {
        return <Navigate to="/login" />
    }

    return children
};

export default Gardien;