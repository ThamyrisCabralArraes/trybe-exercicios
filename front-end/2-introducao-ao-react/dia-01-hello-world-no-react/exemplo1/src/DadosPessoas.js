import { Component } from 'react';

export default class DadosPessoas extends Component {
  render() {
    const { nome } = this.props;
    return (
      <div>
        <h1>Cadastrada</h1>
        <p>Id: {nome.id}</p>
        <p>Nome: {nome.name}</p>
        <p>Email: {nome.email}</p>
        <hr />
      </div>
    );
  }
}
