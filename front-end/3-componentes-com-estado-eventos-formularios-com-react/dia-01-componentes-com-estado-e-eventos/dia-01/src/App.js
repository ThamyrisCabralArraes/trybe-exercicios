
import './App.css';
import { Component } from 'react';


class App extends Component {
  state = {
    contagemClick1: 0,
    contagemClick2: 0,
    contagemClick3: 0,
  }

  
  handleBotao1 = () => {
    this.setState((contagemAnterior, _props) => (
      {contagemClick1: contagemAnterior.contagemClick1 + 1,
      }),
      )
      }
      
  changeColor = (color) => color % 2 === 0 && color !== 0 ? 'pink' : 'white'
  
  handleBotao2 = () => {
    this.setState((estadoAnterior, _) => (
      {contagemClick2: estadoAnterior.contagemClick2 + 1}
    ))
    
  }

  handleBotao3 = () => {
    this.setState((esatdoAnterior, _) => (
      {contagemClick3: esatdoAnterior.contagemClick3 + 1}
    ))
  }

  render() {
    const {contagemClick1} = this.state
    const {contagemClick2} = this.state
    const {contagemClick3} = this.state
  return (
    <div className="App">
    <button 
    onClick={this.handleBotao1} 
    style={{ background: this.changeColor(contagemClick1)}}
    >
      contagem click {contagemClick1}
    </button>
    <button 
    onClick={this.handleBotao2} 
    style={{ background: this.changeColor(contagemClick2)}}
    >
      contagem click {contagemClick2}
    </button>
    <button 
    onClick={this.handleBotao3} 
    style={{ background: this.changeColor(contagemClick3)}}
    >
      contagem click {contagemClick3}
    </button>
    </div>
  );
  }
}

export default App;
