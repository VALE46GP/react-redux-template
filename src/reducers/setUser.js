import * as constants from '../constants/index.js';

const setUser = (state = null, action) => {
    switch (action.type) {
        case constants.SET_USER:
            return action.user || state;
        default:
            return state;
    }
};

export default setUser;
