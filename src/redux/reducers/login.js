import * as TYPES from '../constants';

function login(state = {}, { type, token, uid }) {
  switch (type) {
    case TYPES.LOGIN_SUCCESS: {
      return {
        token,
        uid
      };
    }
    case TYPES.LOGOUT_SUCCESS: {
      return {
        token: null,
        uid: null
      }
    }
    default:
      return state;
  }
};

export default login;