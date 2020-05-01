import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      string: "You dont know me!"
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            { this.state.string }
          </p>
          <button onClick={ () => this.setState({string: "Tink you know me!"}) }>Click me!</button>
        </header>
      </div>
    );
  }
}

export default App;
