import * as CONSTANTS from '../constants';

export const APISignup = (nickName,password) => ({type: CONSTANTS.SIGN_UP_REQUEST, nickName, password});
export const ResponseSingup = (message) => ({type: CONSTANTS.SIGN_UP_RESPONSE, message});