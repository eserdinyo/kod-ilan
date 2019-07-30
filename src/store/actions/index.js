import * as constants from '../constants';

export const fetchPosts = payload => {
    return {
        type: constants.FETCH_POSTS,
        payload,
    }
}

export const fetchPost = payload => {
    return {
        type: constants.FETCH_POST,
        payload,
    }
}

export const resetLoading = () => {
    return {
        type: constants.RESET_LOADING,
    }
}
