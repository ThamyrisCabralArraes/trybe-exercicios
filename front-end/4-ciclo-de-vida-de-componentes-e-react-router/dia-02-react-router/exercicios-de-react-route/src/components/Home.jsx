import { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <p>
          <Link to={'/about'}>About</Link>
        </p>
        <Link to={'/contato'}>Contato</Link>
        <h1>Home</h1>
      </div>
    )
  }
}