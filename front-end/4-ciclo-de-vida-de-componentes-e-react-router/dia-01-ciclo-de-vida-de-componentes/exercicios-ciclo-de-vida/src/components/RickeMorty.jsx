import { Component } from 'react';

export default class RickeeMorty extends Component {
  render() {
    const { characters } = this.props;

    return (
      <div>
        <h1>Rick and Morty</h1>
        {characters.map(({ name, image }) => (
          <div key={name}>
            <h2>{name}</h2>{' '}
            <img
              src={image}
              alt={name}
            />
          </div>
        ))}
      </div>
    );
  }
}
