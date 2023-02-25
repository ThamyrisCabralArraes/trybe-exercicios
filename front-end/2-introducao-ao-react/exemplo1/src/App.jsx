import { Component } from 'react';
import About from './About';
import './App.css';
import Hello from './Hello';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Hello />
        <About />
      </div>
    );
  }
}

export default App;
