import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCharacter } from '../redux/actions';

export class Aplicacao extends Component {
  state = {
    value: '',
  };

  render() {
    const { value } = this.state;
    const { dispatch } = this.props;
    return (
      <div>
        <input
          type='text'
          value={value}
          onChange={({ target }) => this.setState({ value: target.value })}
        />

        <button onClick={() => dispatch(fetchCharacter(value))}>search</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  character: state.character,
});

export default connect(mapStateToProps)(Aplicacao);
