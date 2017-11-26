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
      .then(() => this.props.history.push('/dashboard'));
    // $("input").addClass("error-input");
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
    console.log('component will mount');
    this.props.removeErrors();
  }

  render() {
    if (this.props.errors[0]) {
      $("input").addClass("error-input");
    }

    return (
      <div className="session-form-page">
        <div className="session-form-container">
          <form onSubmit={this.handleSubmit.bind(this)} className="session-form">
            <fieldset>
              <label>Email Address</label>
              <input className="session-input" type="text" value={this.state.email} onChange={this.handleChange('email')}/>
            </fieldset>
            <fieldset>
              <label>Password</label>
              <input className="session-input" type="password" value={this.state.password} onChange={this.handleChange('password')}/>
            </fieldset>
            <button className="btn-green">Log in</button>
            <a className="demo-login" onClick={this.handleDemo.bind(this)}>Demo login</a>
            <strong className="error-message">{this.props.errors[0]}</strong>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm;
