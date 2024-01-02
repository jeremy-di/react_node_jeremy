import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '@/pages/pagesPrivee/Layout';
import ShipList from '@/pages/pagesPrivee/ShipList';
import OneShip from '@/pages/pagesPrivee/OneShip';
import Error404 from '@/_utils/Error404'

const PrivateRouter = () => {
    return (
        <Routes>
            <Route element={< Layout/>}>
            <Route path="list" element={< ShipList/>}/>
            <Route path="one_ship/:_id" element={<OneShip />}/>
            </Route>
            <Route path="*" element={<Error404 />}/>
      </Routes>
    );
};

export default PrivateRouter;