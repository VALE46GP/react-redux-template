import React from 'react';
import ControlsContainer from '../Navigation/container';
import ResultsContainer from '../Body/container';
import './index.css';

const App = (props) => {

    return (
        <div className="App">
            <ControlsContainer />
            <ResultsContainer />
        </div>
    );
};

export default App;
