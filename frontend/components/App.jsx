import React from 'react';
import NavBarContainer from './nav_bar_container';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import DashboardContainer from './dashboard_container';
import SplashPage from './splash_page';
import { TaskForm } from './task_form';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div className="page-content">
    <Switch>
      <AuthRoute path="/login" component={LoginFormContainer}/>
      <AuthRoute path="/signup" component={SignupFormContainer}/>
      <ProtectedRoute path="/dashboard" component={DashboardContainer}/>
      <Route path="/task-form" component={TaskForm}/>
      <AuthRoute path="/" component={SplashPage}/>
    </Switch>
  </div>
)

export default App;
