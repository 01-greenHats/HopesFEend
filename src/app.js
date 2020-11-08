import React from 'react';

import './styles.scss';
import InNeedUsers from './components/inNeedUsers';
import PersonalProfile from './components/personalProfile';
import Header from './components/header';
import { Route, Switch } from 'react-router-dom';
import MainPage from './components/mainPage';
import SiginupUser from './components/signupUser';
import Login from './components/loginUser';
import DonorRegisteration from './components/donorForms'
import UserPayments from './components/userPaymsDtl';
import Loader from './components/loader';



export default propsimport => {
  return (
    <div id='main'>
      <Header />
      <Switch>
        <Route exact path="/in_need_users">
          <InNeedUsers />
        </Route>
        <Route exact path="/user_payments/:id" component={UserPayments}>
        </Route>
        <Route exact path="/">
          <MainPage />
          <Loader />
        </Route>
        <Route exact path="/signupUser">
          <SiginupUser />
        </Route>
        <Route exact path="/loginUser">
          <Login />
        </Route>
        <Route exact path="/login-signup-donor">
          <DonorRegisteration />
        </Route>
        <Route exact path="/personal_profile">
          <PersonalProfile />
        </Route>
        <Route>404 Page Not Found!</Route>
      </Switch>
    </div>

  )
};