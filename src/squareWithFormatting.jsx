import React, { Component } from 'react';

export default class SquareWithFormatting extends Component {
    render() {
        return (
            <div className="col-sm-4">
                <span className="badge badge-secondary">
                    {this.formatGene(this.props.internalState)}
                </span>
            </div>
        );
    }

    formatGene(internalState) {
        if (internalState === true) {
            return 'True';
        } else {
            return 'False';
        }
    }
}
