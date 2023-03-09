import { Component } from 'react';
import './App.css';
import Counter from './components/Counter';
import DadJoker from './components/DadJoke';
import Randomuser from './components/Randomuser';
import RickeeMorty from './components/RickeMorty';

class App extends Component {
  state = {
    counter: 0,
    characters: [],
    dadosApi: [],
    loading: true,
  };

  fetchCharacters = () => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ characters: data.results });
      });
  };

  fetchRandomuser = async () => {
    this.setState({ loading: true }, async () => {
      const response = await fetch(' https://api.randomuser.me/');
      const data = await response.json();
      this.setState(
        { dadosApi: data.results, loading: false },
        console.log(data.results),
      );
    });
  };

  componentDidMount = () => {
    this.fetchCharacters();
    this.fetchRandomuser();
  };

  render() {
    const { characters, dadosApi, loading } = this.state;
    return (
      <div className='App'>
        {/* <Counter />
        <RickeeMorty characters={characters} />
        <p>
          <DadJoker />
        </p> */}
        <Randomuser
          dadosApi={dadosApi}
          loading={loading}
        />
      </div>
    );
  }
}

export default App;
