import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '@/pages/pagesPublic/Layout';
import Home from '@/pages/pagesPublic/Home';
import Error404 from '@/_utils/Error404'
import Register from '@/pages/pagesPublic/Register';
import Login from '@/pages/pagesPublic/Login';

const PublicRouter = () => {
    return (
        <Routes>
            <Route element={< Layout/>}>
            <Route path="/" element={<Home />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/login" element={<Login />}/>
            </Route>
            <Route path="*" element={<Error404 />}/>
      </Routes>
    );
};

export default PublicRouter;