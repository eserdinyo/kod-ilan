import { put, takeEvery } from 'redux-saga/effects'

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
        console.log(e);
    }
}

function* fetchFeaturedPosts() {
    try {
        const res = yield api.fetchFeaturedPosts();

        yield put({ type: constants.FETCH_FEATURED_POSTS_OK, payload: res.data })
    }
    catch (e) {
        console.log(e);
    }
}


function* mySaga() {
    yield takeEvery(constants.FETCH_POSTS, fetchPosts);
    yield takeEvery(constants.FETCH_POST, fetchPost);
    yield takeEvery(constants.FETCH_FEATURED_POSTS, fetchFeaturedPosts);
}

export default mySaga;
