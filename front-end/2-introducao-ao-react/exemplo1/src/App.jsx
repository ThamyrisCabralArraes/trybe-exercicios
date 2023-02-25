import { Component } from 'react';
import About from './About';
import './App.css';
import Hello from './Hello';
import Hobbies from './Hobbies';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Hello />
        <About />
        <Hobbies />
      </div>
    );
  }
}

export default App;
