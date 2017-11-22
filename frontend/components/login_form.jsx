import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
    // this.props.history.push('/#');
  }

  handleChange(type) {
    return e => this.setState({ [type]: e.target.value })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
            Email Address
            <input type="text" value={this.state.email} onChange={this.handleChange('email')}/>
          </label>
          <label>
            Password
            <input type="text" value={this.state.password} onChange={this.handleChange('password')}/>
          </label>
          <input type="submit" value="Log In"/>
        </form>
        {this.props.errors}
      </div>
    )
  }
}

export default LoginForm;
