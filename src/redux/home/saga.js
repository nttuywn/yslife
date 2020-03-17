import { call, put, takeLatest, select } from 'redux-saga/effects';
import * as CONSTANTS from '../constants';
import instance from '../../helper/axios';
import * as ACTIONS from '../../redux/rootAction'

const getProfileData = (url, token) => {
    return instance.get(url, { headers: { Authorization: token && `Bearer ${token}` } })
}

export function* ApiProfile() {
    yield takeLatest(CONSTANTS.GET_PROFILE_REQUEST, function* (action) {
        try {
            const { login = { token: '', id: 201 } } = yield select();
            const result = yield call(getProfileData, '201', login.token);
            yield put(ACTIONS.getProfileResponse(result['data']))
            // yield put(ACTIONS.ResponseSingup(result.data['message']));
        } catch (e) {
            console.log(e);
        }
    });
}