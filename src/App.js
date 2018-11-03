import React, { Component } from 'react';
import './App.css';

class Square extends Component {
    state = {};
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

        return <div>Output {display} </div>;
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
                <table>
                    <tr>
                        <td>
                            <Square />
                        </td>
                        <td>
                            <Square />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Square />
                        </td>
                        <td>
                            <Square />
                        </td>
                    </tr>
                </table>
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
                    <button>Paternal - EE gene (big eyes)</button>
                    <br />
                    <button>Maternal - BB gene (blue skin)</button>
                </div>

                <div className="App">
                    <Grid />
                </div>
            </div>
        );
    }
}

export default App;
