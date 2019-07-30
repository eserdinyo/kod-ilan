import * as constants from '../constants';

const initialState = {
    posts: [],
    post: {},
    isLoading: true,
}

const postsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case constants.FETCH_POSTS_OK:
            return { ...state, posts: [...payload], isLoading: false }

        case constants.FETCH_POST_OK:
            return { ...state, post: { ...payload }, isLoading: false }

        case constants.RESET_LOADING:
            return { ...state, isLoading: true }

        default:
            return state;
    }
}

export default postsReducer;