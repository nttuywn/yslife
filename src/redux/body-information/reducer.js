import * as CONSTANTS from '../constants';

export const bodyInformation = (state = {}, { type, bodyInformation, message }) => {
    switch (type) {
        case CONSTANTS.FORM_INPUT_BODY_INFORMATION: {
            return {
                ...state, ...bodyInformation,
            };
        }
        case CONSTANTS.INPUT_BODY_INFORMATION_RESPONSE: {
            return {
                ...state, message
            };
        }
        default:
            return state;
    }
};