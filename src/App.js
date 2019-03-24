import React, { Component } from 'react';
import './App.css';

import SquareWithFormatting from './squareWithFormatting.jsx';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            internalState: false
        };

        // This binding is necessary to make `this` work in the callback
        this.onMenuItemClicked = this.onMenuItemClicked.bind(this);
    }

    onMenuItemClicked(e) {
        e.preventDefault();
        this.setState({ internalState: !this.state.internalState });
    }

    render() {
        return (
            <div>
                <div>
                    <div>Click to change div</div>
                    <br />
                    <button
                        className="btn btn-primary"
                        onClick={this.onMenuItemClicked}
                    >
                        Click
                    </button>
                </div>
                <br />

                <div className="App">
                    <Grid internalState={this.state.internalState} />
                </div>
            </div>
        );
    }
}

function Grid({ internalState }) {
    return (
        <div>
            <SquareWithFormatting internalState={internalState} />
        </div>
    );
}

export default App;
