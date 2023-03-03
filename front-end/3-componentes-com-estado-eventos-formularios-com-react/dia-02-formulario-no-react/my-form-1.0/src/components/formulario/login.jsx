import { Component } from "react";

export default class Login extends Component {
  render() {
    const {value, handleChange } = this.props
    return (
      <label>
          Login:
        <input name='valueLogin' value={value} onChange={handleChange} />
        </label>
    )
  }
}