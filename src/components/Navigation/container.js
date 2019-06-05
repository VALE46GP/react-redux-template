import Navigation from './index';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    const {
        user,
    } = state;
    return ({
        user,
    });
};

// const mapDispatchToProps = (dispatch) => {
//     return ({
//     });
// };

const NavigationContainer = connect(mapStateToProps, null)(Navigation);

export default NavigationContainer;
