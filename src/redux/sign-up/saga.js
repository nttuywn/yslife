import { call, put, takeLatest, all } from 'redux-saga/effects';
import * as CONSTANTS from '../constants';
import instance from '../../helper/axios';
import * as ACTIONS from '../../redux/rootAction'

const postSignUpData = (url, nickName, password) => {
    return instance.post(url, {
        nickName,
        password
    })
}

export function* ApiSignUp() {
    yield takeLatest(CONSTANTS.SIGN_UP_REQUEST, function* (action) {
        const { nickName, password } = action;
        try {
            const result = yield call(postSignUpData, 'sign-up', nickName, password);
            yield put(ACTIONS.ResponseSingup(result.data['message']));
        } catch (e) {
            console.log(e);
        }
    });
}