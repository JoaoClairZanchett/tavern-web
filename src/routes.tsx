import { Route, BrowserRouter } from 'react-router-dom';
import React from 'react';
import Home from './pages/home/home'
import Login from './pages/login/login';
import CreateCharacter from './pages/create-character/create-character';
import ManageSystem from './pages/manage-system/manage-system';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path='/' exact/>
            <Route component={Login} path='/login' exact/>
            <Route component={CreateCharacter} path='/create-character' exact/>
            <Route component={ManageSystem} path='/manage-system' exact/>
        </BrowserRouter>
    )
}

export default Routes;