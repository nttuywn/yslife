import * as CONSTANTS from '../constants';

export const profile = (state = {}, { type, profile }) => {
    switch (type) {
        case CONSTANTS.GET_PROFILE_RESPONSE: {
            return profile;
        }
        default:
            return state;
    }
}