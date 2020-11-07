import React from 'react';

import './styles.scss';
import InNeedUsers from './components/inNeedUsers';
// import Header from './components/header';
import { Route, Switch } from 'react-router-dom';
import MainPage from './components/mainPage';
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
        <Route>404 Page Not Found!</Route>
      </Switch>
    </div>

  )
};