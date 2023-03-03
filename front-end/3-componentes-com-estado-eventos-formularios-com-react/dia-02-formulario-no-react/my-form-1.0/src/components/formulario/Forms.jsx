import { Component } from "react";
import CheckBox from "./CheckBox";
import Login from "./login";
import Password from "./Password";
import Select from "./Select";
import TextArea from "./TextArea";

export default class Forms extends Component {
  state = {
    valueLogin: '',
    valuePassword: '',
    empresa: '',
    text: '',
    checkboxs: false,

  }

  handleChange = ({ target }) => {
    const { name } = target
    const value = target.type === 'checkbox' ? target.checked : target.value

    this.setState({ [name]: value })
  }

  render() {
    const { valueLogin, valuePassword, empresa, text, checkboxs } = this.state
    return(
      <fieldset>
        <Login value={valueLogin} handleChange={this.handleChange}/>
        <br />
        <Password value={valuePassword} handleChange={this.handleChange} />
        <br />
        <Select value={empresa} handleChange={this.handleChange} />
        <br />
        <TextArea value={text} handleChange={this.handleChange} />
        <br />
        <CheckBox value={checkboxs} handleChange={this.handleChange} />
        
      </fieldset>
    )
  }
}