import * as CONSTANTS from '../constants';

export const formInputBodyInformation = (bodyInformation) => ({
    type: CONSTANTS.FORM_INPUT_BODY_INFORMATION,
    bodyInformation
});

export const formInputBodyInformationRequest = (bodyInformation) => ({
    type: CONSTANTS.INPUT_BODY_INFORMATION_REQUEST,
    bodyInformation
});

export const formInputBodyInformationResponse = (message) => ({
    type: CONSTANTS.INPUT_BODY_INFORMATION_RESPONSE,
    message
});