import { call, put, takeEvery } from 'redux-saga/effects'

import * as constants from '../store/constants';
import * as api from '../api';

function* fetchPosts() {
    try {
        const res = yield api.fetchPosts();
        yield put({ type: constants.FETCH_POSTS_OK, payload: res });
    } catch (e) {
        yield console.log(e);
    }
}

function* fetchPost({ payload }) {
    try {
        const res = yield api.fetchPost(payload);
        yield put({ type: constants.FETCH_POST_OK, payload: res });
    }
    catch (e) {
        yield console.log(e);
    }
}


function* mySaga() {
    yield takeEvery(constants.FETCH_POSTS, fetchPosts);
    yield takeEvery(constants.FETCH_POST, fetchPost);
}

export default mySaga;
