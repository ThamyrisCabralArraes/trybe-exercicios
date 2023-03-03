import { Component } from "react";

export default class Password extends Component {
  render() {
    const {value, handleChange } = this.props
    return (
      <label>
          Senha:
        <input name="valuePassword" value={value} onChange={handleChange} />
        </label>
    )
  }
}