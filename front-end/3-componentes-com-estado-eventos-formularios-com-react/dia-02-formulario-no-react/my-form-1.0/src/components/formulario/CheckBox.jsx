import { Component } from "react";

export default class CheckBox extends Component {
  render() {
    const {value, handleChange } = this.props

    return (
      <input name="checkboxs" type='checkbox' value={value} onChange={handleChange} />
    )
  }
}