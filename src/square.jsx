import React, { Component } from 'react';
import EventEmitter from 'EventEmitter';

var events = new EventEmitter();

export default class Square extends Component {
    state = { value: 'BB' };

    render() {
        events.on('change-state', function(state) {
            console.log('change-state detected!');
            //Square.this.setState({ value: 'XX' });
        });

        return (
            <div>
                <span className="badge badge-secondary">
                    {this.formatGene()}
                </span>
            </div>
        );
    }

    formatGene() {
        var value = 'xxxx';

        if (this.state.value === 'BB') {
            value = '(BB) - Big Eyes';
        } else {
            value = '(???)';
        }

        return value;
    }
}
