import { Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contato from './components/Contato';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Route exact path={'/'} component={Home} />
      <Route path={'/about'} component={About} />
      <Route path={'/Contato'} component={Contato}  />
    </div>
  );
}

export default App;
