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
import Confirmation from './components/Confirmation/Confirmation';


export default (
    <Switch>
        <Route exact path='/' component={ Landing }/>
        <Route path='/auth/login' exact component={ Login }/>
        <Route path='/auth/signup' component={ SignUp }/>
        <Route path='/dashboard/:id' exact component={ Dashboard }/>
        <Route path='/dashboard/snapshot' exact component={ Snapshot }/>
        <Route path='/info' exact component={ Info } />
        <Route path='/upcoming' exact component={ Upcoming }/>
        <Route path='/results/' component={ Results }/>
        <Route path='/checkout' exact component={ Checkout }/>
        <Route path='/confirmation' exact component={ Confirmation }/>
    </Switch>
)