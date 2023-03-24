// App.js
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      joke: '',
      prevewsJoke: [],
    };

    this.fetchJoke = this.fetchJoke.bind(this);
  }

  componentDidMount() {
    this.fetchJoke();
  }

  fetchJoke() {
    const API_URL = 'https://icanhazdadjoke.com/';
    const REQUEST_CONFIG = { headers: { Accept: 'application/json' } };
    fetch(API_URL, REQUEST_CONFIG)
      .then((response) => response.json())
      .then((data) => this.setState({ joke: data.joke }));
  }

  handleJoke = () => {
    const { prevewsJoke } = this.state;

    this.setState(
      (prevState) => ({
        prevewsJoke: [prevState.joke, ...prevewsJoke],
      }),
      this.fetchJoke(),
    );
  };

  render() {
    const { joke, prevewsJoke } = this.state;

    return (
      <div className='App'>
        <p>{joke}</p>

        <button onClick={this.handleJoke}>new joke</button>

        {prevewsJoke.map((joke) => (
          <p>{joke}</p>
        ))}
      </div>
    );
  }
}

export default App;
