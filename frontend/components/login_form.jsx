import React from 'react';
import { Link } from 'react-router-dom';
import { handleErrorInput } from '../util/errors_util';
import classNames from 'classnames';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    this.handleErrorInput = handleErrorInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state)
      .then(() => this.props.history.push('/dashboard'));
  }

  handleChange(type) {
    return e => this.setState({ [type]: e.target.value })
  }

  handleDemo(e) {
    e.preventDefault();
    this.setState(
      { email: "demo@demo.com", password: "demo123" },
      () => this.handleSubmit(e)
    )
  }

  componentWillMount() {
    this.props.removeErrors();
  }

  render() {
    const errorModalClassName = classNames({
      hidden: this.props.errors.length === 0 ||
              this.props.errors.length > 0 && !this.props.errors[0].includes("Incorrect")
    })

    return (
      <div className="session-form-page">
        <div id="error-modal" className={errorModalClassName} onClick={this.props.removeErrors}>
          <strong>{this.props.errors}</strong>
          <i class="fa fa-times" aria-hidden="true"></i>
        </div>
        <div className="session-form-container">
          <form onSubmit={this.handleSubmit} className="session-form">
            <fieldset>
              <label>Email Address</label>
              <input className="Email session-input" type="text" value={this.state.email} onChange={this.handleChange('email')}/>
              {this.handleErrorInput("Email")}
            </fieldset>
            <fieldset>
              <label>Password</label>
              <input className="Password session-input" type="password" value={this.state.password} onChange={this.handleChange('password')}/>
              {this.handleErrorInput("Password")}
            </fieldset>
            <button className="btn-green">Log in</button>
            <a className="demo-login" onClick={this.handleDemo}>Demo login</a>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm;
