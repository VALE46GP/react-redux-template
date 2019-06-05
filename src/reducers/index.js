import { combineReducers } from 'redux';

import setUser from './setUser';

const rootReducer = combineReducers({
    user: setUser,
});

export default rootReducer;
