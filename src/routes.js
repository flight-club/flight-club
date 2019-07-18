import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Dashboard from './components/Dashboard/Dashboard';
import Snapshot from './components/Dashboard/Snapshot';
import Info from './components/Dashboard/Info';
import Upcoming from './components/Dashboard/Upcoming';
import Results from './components/Results/Results';
import Checkout from './components/Checkout/Checkout';


export default (
    <Switch>
        <Route exact path='/' component={ Landing }/>
        <Route path='/auth/login' exact component={ Login }/>
        <Route path='/auth/signup' component={ SignUp }/>
        <Route path='/dashboard' exact component={ Dashboard }/>
        <Route path='/dashboard/snapshot' exact component={ Snapshot }/>
        <Route path='/dashboard/info' exact component={ Info } />
        <Route path='/dashboard/upcoming' exact component={ Upcoming }/>
        <Route path='/results' component={ Results }/>
        <Route path='/checkout' exact component={ Checkout }/>
    </Switch>
)