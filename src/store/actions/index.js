import * as constants from '../constants';

export const fetchPosts = () => {
    return {
        type: constants.FETCH_POSTS,
    }
}

export const fetchPost = payload => {
    return {
        type: constants.FETCH_POST,
        payload,
    }
}

export const fetchFeauteredPosts = () => {
    return {
        type: constants.FETCH_FEATURED_POSTS,
    }
}

export const resetLoading = () => {
    return {
        type: constants.RESET_LOADING,
    }
}
