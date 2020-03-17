import * as CONSTANTS from '../constants';

export const signupResponse = (state = {}, { type, message }) => {
    switch (type) {
        case CONSTANTS.SIGN_UP_RESPONSE: {
            return {
                message
            };
        }
        default:
            return state;
    }
};