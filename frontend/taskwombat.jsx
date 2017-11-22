import React from 'react';
import ReactDOM from 'react-dom';
import * as sessionAPIUtil from './util/session_api_util';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  
  ReactDOM.render(<h1>Welcome to TaskWombat</h1>, root);
});

window.signup = sessionAPIUtil.signup;
window.login = sessionAPIUtil.login;
window.logout = sessionAPIUtil.logout;
