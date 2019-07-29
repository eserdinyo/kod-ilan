import * as constants from '../constants';

const initialState = {
    number: 5,
}

const counterReducer = (state = initialState, { type, payload }) => {
    console.log({ ...state });

    switch (type) {
        case constants.INCREMENT_COUNTER:
            state.number = state.number + payload;
            console.log({ ...state });

            return { ...state }
        case constants.DECREMENT_COUNTER:
            return state.number - payload
        default:
            return state;
    }
}

export default counterReducer;