
import './App.css';
import { Component } from 'react';


class App extends Component {
  handleBotao1 = () => {
    console.log('clicou botao 1')
  }

  handleBotao2 = () => {
    console.log('clicou botao 2')
  }

  handleBotao3 = () => {
    console.log('clicou botao 3')
  }

  render() {
  return (
    <div className="App">
    <button onClick={this.handleBotao1}>botao1</button>
    <button onClick={this.handleBotao2}>botao2</button>
    <button onClick={this.handleBotao3}>botao3</button>
    </div>
  );
  }
}

export default App;
