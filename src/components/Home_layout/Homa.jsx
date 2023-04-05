import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Homa = () => {
    return (
        <div>
            <Header></Header>
            <Outlet />
        </div>
    );
};

export default Homa;