
import { Component } from 'react';
import './App.css';
// class App extends React.Component {
  
class App extends Component {
  state = {
    valueLogin: '',
    valuePassword: '',
  }

  handleLogin = (e) => {
    this.setState({ valueLogin: e.target.value })
  }

  handlePassword = (e) => {
    this.setState({ valuePassword: e.target.value })
  }

render() {
  return (
    <div className="App">
      <label>
        Login: 
      <input value={this.state.valueLogin} onChange={this.handleLogin} />
      </label>
      <br />
      <label>
        Senha: 
      <input value={this.state.valuePassword} onChange={this.handlePassword} />
      </label>
    <br />
      <select>
        <option>Escolha a Instituição</option>
        <option>Empresa Comer</option>
        <option>Empresa Dormir</option>
      </select>
    </div>
  );
}
}

export default App;
