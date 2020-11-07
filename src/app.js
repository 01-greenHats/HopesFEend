import React from 'react';

import './styles.scss';
import InNeedUsers from './components/inNeedUsers';
// import Header from './components/header';
import { Route, Switch } from 'react-router-dom';
import MainPage from './components/mainPage';
import SiginupUser from './components/signupUser';
import Login from './components/loginUser';
import DonorRegisteration from './components/donorForms'

export default propsimport => {
  return (
    <div id='main'>
      <Switch>
        <Route exact path="/inneedusers">
            <InNeedUsers/>
        </Route>
        <Route exact path="/">
            <MainPage/>
        </Route>
        <Route exact path="/siginupUser">
          <SiginupUser/>
        </Route>
        <Route exact path="/loginUser">
          <Login/>
        </Route>
        <Route exact path="/login-siginup-donor">
          <DonorRegisteration/>
        </Route>
        <Route>404 Page Not Found!</Route>
      </Switch>
    </div>

  )
};