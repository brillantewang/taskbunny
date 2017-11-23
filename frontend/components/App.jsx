import React from 'react';
import NavBarContainer from './nav_bar_container';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import DashboardContainer from './dashboard_container';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div className="page-content">
    <header>
      <Route exact path="/" component={NavBarContainer}/>
      <Route exact path="/dashboard" component={NavBarContainer}/>
    </header>

    <AuthRoute path="/login" component={LoginFormContainer}/>
    <AuthRoute path="/signup" component={SignupFormContainer}/>
    <ProtectedRoute path="/dashboard" component={DashboardContainer}/>
  </div>
)

export default App;
