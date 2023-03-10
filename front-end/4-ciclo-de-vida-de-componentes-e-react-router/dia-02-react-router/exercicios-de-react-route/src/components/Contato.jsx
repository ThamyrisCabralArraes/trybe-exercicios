import { Component } from "react";
import { Link } from "react-router-dom";


export default class Contato extends Component {
  render() {
    return (
      <div>
        <h1>Contato</h1>
        <Link to={'/'} >Voltar</Link>
      </div>
    )
  }
}