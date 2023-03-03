import { Component } from "react";

export default class TextArea extends Component {
  render() {
    const {value, handleChange } = this.props

    return (
      <textarea name='text' value={value} onChange={handleChange}></textarea>
    )
  }
}