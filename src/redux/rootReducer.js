import { combineReducers } from 'redux';
import { bodyInformation } from './body-information/reducer';
import { signupResponse } from './sign-up/reducer';
import login from './reducers/login';
import { profile } from './home/reducer';

export default combineReducers({
    bodyInformation,
    signupResponse,
    login,
    profile
});