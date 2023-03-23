// App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className='App'>
      <label htmlFor='id-email'>
        Email
        <input
          id='id-email'
          type='email'
        />
      </label>
      <input
        id='btn-send'
        type='button'
        value='Enviar'
        data-testid='id-send'
      />
      <input
        id='btn-back'
        type='button'
        value='Voltar'
      />
    </div>
  );
}

export default App;