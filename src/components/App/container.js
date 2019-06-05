import App from './index';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    const { user } = state;
    return ({
        user,
    });
};

// const mapDispatchToProps = (dispatch) => ({
// });

const AppContainer = connect(mapStateToProps, null)(App);


export default AppContainer;
