import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      err: ""
    }
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(jsrespon => this.setState({monsters: jsrespon}));
    }
  render(){
    return(
      <div className="App">
      <CardList>
      {
        this.state.monsters.map( monster => <h1 key={monster.id}>{ monster.name }</h1>)
      }
      </CardList>
      </div>
    );
  }
}

export default App;
