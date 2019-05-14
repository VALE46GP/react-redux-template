import * as constants from '../constants/results';
import axios from "axios";

/**
 * Set user
 *
 * @param {string} username
 * @returns {object} action
 */
const login = (username) => {
    // check if username is valid
    if(!username.match(/^[0-9a-zA-Z]{1,16}$/)){
        alert("ALERT: Username must be 1-16 characters without any spaces or special symbols!");
    } else {
        return dispatch => {
            axios.get('/users?username=' + username)
                .then((response) => {
                    const user = response.data.results;
                    dispatch(loginSuccess(user));
                })
                .catch(err => {
                    console.log('error: ', err);
                });
        }
    }
};

const loginSuccess = user => ({
    type: constants.LOAD_WATCHLIST,
    user,
});

// const loginStarted = () => ({
//     type: LOAD_WATCHLIST_STARTED
// });

// const loginFailure = error => ({
//     type: LOAD_WATCHLIST_FAILURE,
//     payload: {
//         error
//     }
// });

export default login;
