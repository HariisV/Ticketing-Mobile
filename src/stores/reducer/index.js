import {combineReducers} from 'redux';
import auth from './auth';
import history from './history';
// import registerPage from './register';
// import dashboard from './dashboard';
// import profile from './profile';
export default combineReducers({
  auth,
  history,
  // registerPage,
  // dashboard,
  // profile,
});
