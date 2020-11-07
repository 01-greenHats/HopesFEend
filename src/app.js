import React from 'react';

import './styles.scss';
import InNeedUsers from './components/inNeedUsers';
// import Header from './components/header';
import { Route, Switch } from 'react-router-dom';
import MainPage from './components/mainPage';
import SiginupUser from './components/signupUser';
import Login from './components/loginUser';
import DonorRegisteration from './components/donorForms'
import UserPayments from './components/userPaymsDtl';


export default propsimport => {
  return (
    <div id='main'>
      <Switch>
        <Route exact path="/in_need_users">
            <InNeedUsers/>
        </Route>
        <Route exact path="/user_payments">
            <UserPayments/>
        </Route>
        <Route exact path="/">
            <MainPage/>
        </Route>
        <Route exact path="/signupUser">
          <SiginupUser/>
        </Route>
        <Route exact path="/loginUser">
          <Login/>
        </Route>
        <Route exact path="/login-signup-donor">
          <DonorRegisteration/>
        </Route>
        <Route>404 Page Not Found!</Route>
      </Switch>
    </div>

  )
};