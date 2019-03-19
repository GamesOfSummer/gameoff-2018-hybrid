import React, { Component } from 'react';
import EventEmitter from 'EventEmitter';

import Square from './square.jsx';

var events = new EventEmitter();

export default class SquareWithFormatting extends Component {
    state = {};

    simulateClick(e) {
        //e.click();

        console.log('clicked??');
        // inside Component1
        events.emit('change-state', { value: 'YY' });
    }

    render() {
        return (
            <div className="col-sm-4">
                <div onClick={this.simulateClick}>
                    <Square />
                </div>
            </div>
        );
    }
}
