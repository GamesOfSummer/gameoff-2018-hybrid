import React, { Component } from 'react';
import './App.css';
import EventEmitter from 'EventEmitter';

import SquareWithFormatting from './squareWithFormatting.jsx';

var events = new EventEmitter();

export default class Grid extends Component {
    render() {
        return (
            <div className="container">
                {' '}
                <div className="row">
                    <SquareWithFormatting />
                    <SquareWithFormatting />
                </div>
                <div className="row">
                    <SquareWithFormatting />
                    <SquareWithFormatting />
                </div>
            </div>
        );
    }
}
