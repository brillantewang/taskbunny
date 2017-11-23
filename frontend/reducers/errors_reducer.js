import { combineReducers } from 'redux';
import loginErrorsReducer from './login_errors_reducer';
import signupErrorsReducer from './signup_errors_reducer';

const errorsReducer = combineReducers({
  login: loginErrorsReducer,
  signup: signupErrorsReducer
})

export default errorsReducer;
