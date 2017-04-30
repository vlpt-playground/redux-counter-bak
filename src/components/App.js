import React, {Component} from 'react';
import CounterContainer from '../containers/CounterContainer';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <CounterContainer/>
            </div>
        );
    }
}

export default App;
