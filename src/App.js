import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ""
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
      <input 
          type="search"
          placeholder="Serach Field ..."
          onChange={e=> this.setState({ searchField: e.target.value }, () => {console.log(this.state.searchField)})}
      />
      <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
