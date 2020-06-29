import { Route, BrowserRouter } from 'react-router-dom';
import React from 'react';
import Home from './pages/home/home'
import Login from './pages/login/login';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path='/' exact/>
            <Route component={Login} path='/login' exact/>
        </BrowserRouter>
    )
}

export default Routes;