import * as constants from '../constants';

export const increment = payload => {
    return {
        type: constants.INCREMENT_COUNTER,
        payload,
    }
}

export const decrement = payload => {
    return {
        type: constants.DECREMENT_COUNTER,
        payload,
    }
}