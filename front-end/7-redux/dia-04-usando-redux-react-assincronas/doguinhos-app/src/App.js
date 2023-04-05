import React from 'react';
import { connect } from 'react-redux';
import fetchDogImage from './redux/actions';
import './App.css';

class App extends React.Component {
  render() {
    const { imageURL, dispatch, isFetching } = this.props;
    console.log(imageURL);
    if (isFetching) return <p>Carregando...</p>;
    return (
      <div className='App'>
        <button
          onClick={() => {
            dispatch(fetchDogImage(imageURL));
          }}
          type='button'
        >
          Novo Doguinho
        </button>
        {imageURL && (
          <img
            src={imageURL}
            alt='Imagem de um cachorro aleatório'
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  imageURL: state.imageURL,
  isFetching: state.isFetching,
});

export default connect(mapStateToProps)(App);
