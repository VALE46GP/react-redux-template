import React, { Component } from 'react';
import ControlsContainer from '../Navigation/container';
import ResultsContainer from '../Body/container';
import LoginContainer from '../Login/container';
import './index.css';

class App extends Component {

    componentDidMount() {
    }

    render() {
        const { user } = this.props;
        const content = user
            ? (
                <div className="App">
                    <ControlsContainer />
                    <ResultsContainer />
                </div>
            )
            : (
                <LoginContainer
                    show={!user}
                />
            );

        return (
            <div>
                <div className="area">
                    <ul className="circles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                {content}
            </div>
        )
    }
}

export default App;
