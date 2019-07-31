import * as constans from '../constants';

const initialState = {
    isLoggedIn: localStorage.getItem('isLoggedIn') == 'true' ? true : false
}


const authReducer = (state = initialState, { type }) => {
    switch (type) {
        case constans.SIGN_IN:
            localStorage.setItem('isLoggedIn', true);
            return { ...state, isLoggedIn: true }

        case constans.SIGN_OUT:
            localStorage.setItem('isLoggedIn', false);
            return { ...state, isLoggedIn: false }

        default:
            return state;
    }
}

export default authReducer;