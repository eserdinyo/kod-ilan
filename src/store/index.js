import { combineReducers } from 'redux';

import postsReducer from './reducers/posts';
import authReducer from './reducers/auth';

export default combineReducers({
    postsReducer,
    authReducer
})