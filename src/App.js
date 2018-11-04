import React, { Component } from 'react';
import './App.css';

class Holder extends Component {
    state = { value: 'BB' };
    render() {
        var cardArray = [
            { kanji: '白', hiragana: 'しろ' },
            { kanji: ' 黒 ', hiragana: 'くろ ' },
            { kanji: ' 金色 ', hiragana: ' きんいろ' }
        ];

        var display = [];
        for (var i = 0; i < cardArray.length; i++) {
            display.push(<div> {cardArray[i].kanji}</div>);
        }

        console.log('length: ' + cardArray.length);

        return (
            <div>
                {this.state.value} - {display}
            </div>
        );
    }
}

class Square extends Component {
    state = { value: 'BB' };
    render() {
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

class Grid extends Component {
    simulateClick(e) {
        e.click();
    }

    render() {
        return (
            <div
                ref={this.simulateClick}
                onClick={() => console.log('clicked??')}
            >
                <Square />
            </div>
        );
    }
}

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <div>Dragons default to small eyes and red skin</div>
                    <br />
                    <button className="btn btn-primary">
                        Paternal - EE gene (big eyes)
                    </button>
                    <br />
                    <button className="btn btn-primary">
                        Maternal - BB gene (blue skin)
                    </button>
                </div>
                <br />
                <div className="App">
                    <Grid />
                </div>
            </div>
        );
    }
}

export default App;
