import * as CONSTANTS from '../constants';

export const getProfileRequest = () => ({
    type: CONSTANTS.GET_PROFILE_REQUEST
});

export const getProfileResponse = (profile) => ({
    type: CONSTANTS.GET_PROFILE_RESPONSE,
    profile
});