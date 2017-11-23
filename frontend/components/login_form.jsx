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
    this.props.login(this.state)
      .then(() => this.props.history.push('/dashboard'))
  }

  handleChange(type) {
    return e => this.setState({ [type]: e.target.value })
  }

  render() {
    return (
      <div className="session-form-page">
        <div className="session-form-container">
          <form onSubmit={this.handleSubmit.bind(this)} className="session-form">
            <fieldset>
              <label>Email Address</label>
              <input type="text" value={this.state.email} onChange={this.handleChange('email')}/>
            </fieldset>
            <fieldset>
              <label>Password</label>
              <input type="text" value={this.state.password} onChange={this.handleChange('password')}/>
            </fieldset>
            <button>Log in</button>
            {this.props.errors}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm;
