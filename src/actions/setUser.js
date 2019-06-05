import * as constants from '../constants/index.js';

/**
 * set user (used on login)
 *
 * @param {object} user
 * @returns {object} action
 */
const setUser = user => ({
    type: constants.SET_USER,
    user,
});

export default setUser;
