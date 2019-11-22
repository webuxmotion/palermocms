import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './hoc/layout';
import Home from './components/Home';
import RegisterLogin from './components/Register_login';
import Register from './components/Register_login/register';

const Routes = () => {
  return(
    <Layout>
      <Switch>
        <Route path="/backend/register_login" exact component={RegisterLogin} /> 
        <Route path="/backend/register" exact component={Register} /> 
        <Route path="/backend/" exact component={Home} /> 
      </Switch>
    </Layout>
  )
}

export default Routes;
