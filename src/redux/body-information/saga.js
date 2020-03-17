import { call, put, takeLatest, select } from 'redux-saga/effects';
import * as CONSTANTS from '../constants';
import instance from '../../helper/axios';
import { Toast } from 'native-base';
import * as ACTIONS from '../../redux/rootAction'

const postBodyData = (url, token, bodyInformation) => {
    const { height, bodyfat, skeletalmuscle, gender } = bodyInformation;
    return instance.post(url, {
        date: new Date(),
        memberId: 201,
        gender: gender,
        height: height,
        bodyFat: bodyfat,
        skeletalMuscle: skeletalmuscle
    }, { headers: { Authorization: token && `Bearer ${token}` } })
}

export function* ApiBodyInformation() {
    yield takeLatest(CONSTANTS.INPUT_BODY_INFORMATION_REQUEST, function* (action) {
        const { bodyInformation } = action;
        try {
            const { login = { token: '' } } = yield select();
            const result = yield call(postBodyData, 'body', login.token, bodyInformation);
            yield put(ACTIONS.formInputBodyInformationResponse(result.data['message']));
        } catch (e) {
            console.log(e);
        }
    });
}