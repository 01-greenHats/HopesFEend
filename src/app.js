import React from 'react';

import './styles.scss';
import InNeedUsers from './components/inNeedUsers';
import PersonalProfile from './components/personalProfile';
import Header from './components/header';
import Footer from './components/footer';
import { Route, Switch } from 'react-router-dom';
import MainPage from './components/mainPage';
// import SiginupUser from './components/signupUser';
// import Login from './components/loginUser';
import UserForm from './components/userForms';
import DonorRegisteration from './components/donorForms'
import UserPayments from './components/userPaymsDtl';
import Loader from './components/loader';

import About from './components/aboutUsPage';



export default propsimport => {
  return (
    <div id='main'>
      <Header />
      <Switch>
        <Route exact path="/in_need_users">
          <InNeedUsers />
          <Loader />
        </Route>
        <Route exact path="/user_payments/:id" component={UserPayments}>
        </Route>
        <Route exact path="/">
          <MainPage />
          <Loader />
        </Route>
        <Route exact path="/userForm">
          <UserForm/>
        </Route>
        <Route exact path="/login-signup-donor">
          <DonorRegisteration />
        </Route>
        <Route exact path="/personal_profile">
          <PersonalProfile />
          <Loader />
        </Route>
        <Route exact path="/about-us">
          <About />
        </Route>

        
       
        <Route>404 Page Not Found!</Route>
      </Switch>
      <Footer />
    </div>

  )
};