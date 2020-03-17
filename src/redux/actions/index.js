import * as TYPES from '../constants';

export const action = (type, data) => ({ type, ...data });

export const LoginFunction = (user, password) => action(TYPES.LOGIN_REQUEST, { user, password });
export const Logout = () => action(TYPES.LOGOUT);