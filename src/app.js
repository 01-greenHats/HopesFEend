import React from 'react';

import './styles.scss';
import InNeedUsers from './components/inNeedUsers';
// import Header from './components/header';
import { Route, Switch } from 'react-router-dom';
import MainPage from './components/mainPage';


export default propsimport => {
  return (
    <div id='main'>
      {/* <Header/> */}
      <Switch>
        <Route exact path="/inneedusers">
            <InNeedUsers/>
        </Route>

        <Route exact path="/">
            <MainPage/>
        </Route>
        {/* <Route exact path="/productDetails/:id" component={ProductDtl} />
        <Route component={CartDetails} exact path="/cartDetails"/> */}
        <Route>404 Page Not Found!</Route>
      </Switch>

    </div>

  )
};
