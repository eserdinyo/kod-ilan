import * as constants from '../constants';

const initialState = {
    posts: [],
    post: {},
    isDetailLoading: false,
    isLoading: false,
    featuredPosts: [],
}

const postsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case constants.FETCH_POSTS_OK:
            return { ...state, posts: [...payload], isLoading: true }

        case constants.FETCH_POST_OK:
            return { ...state, post: { ...payload }, isDetailLoading: true }

        case constants.RESET_LOADING:
            return { ...state, isLoading: true }

        case constants.FETCH_FEATURED_POSTS_OK:
            return { ...state, featuredPosts: [...payload] }


        default:
            return state;
    }
}

export default postsReducer;