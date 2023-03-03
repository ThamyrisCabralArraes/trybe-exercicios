import { Component } from "react";

export default class Select extends Component {
  render() {
    const {value, handleChange } = this.props

    return (
      <label  htmlFor="name">
      <select name='empresa' value={value} onChange={handleChange}>
        <option name='empresa' value='escolha' >Escolha a Instituição</option>
        <option value='Empresa Comer'>Empresa Comer</option>
        <option value='Empresa Dormir'>Empresa Dormir</option>
      </select>
    </label>
    )
  }
}