import React, { Component } from 'react';
import Board from './components/board/Board.js'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Board />
      </div>
    );
  }
}

export default App;
