import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types'

export const Caractesristicas = (props) => {
  const { character, loading } = this.props;
  if (!loading && character) {
    return (
      <ul>
        <li>Name: {character.name}</li>
        <li>Born: {character.born}</li>
        <li>
          Titles:
          <ol>
            {character.titles.map((title, index) => (
              <li key={`${title}-${index}`}>{title}</li>
            ))}
          </ol>
        </li>
        <li>
          Aliases:
          <ol>
            {character.aliases.map((alias, index) => (
              <li key={`${alias}-${index}`}>{alias}</li>
            ))}
          </ol>
        </li>
      </ul>
    );
  }
};

Caractesristicas.propTypes = {};

const mapStateToProps = (state) => ({
  character: state.character,
  loading: state.isLoading,
  error: state.error,
});

export default connect(mapStateToProps)(Caractesristicas);
