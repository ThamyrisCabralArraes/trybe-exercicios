import { Component } from 'react';

export default class Randomuser extends Component {
  shouldComponentUpdate = (nextProps) => {
    if (nextProps.dadosApi.length > 0 && nextProps.dadosApi[0].dob.age >= 50) {
      return false;
    }
    return true;
  };

  render() {
    const { dadosApi, loading } = this.props;
    return (
      <div>
        {loading ? (
          <span>Loading</span>
        ) : (
          dadosApi.map(({ name, dob, email, picture }) => (
            <div key={name.first}>
              <h1> Perfil </h1>
              <img
                src={picture.medium}
                alt=''
              />
              <h2>{`Nome: ${name.title} ${name.first} ${name.last}`}</h2>
              <h2>Email: {email}</h2>
              <h3>Idade: {dob.age}</h3>
            </div>
          ))
        )}
      </div>
    );
  }
}
