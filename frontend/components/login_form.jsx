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
      .then(() => {
        this.props.history.push('/dashboard')});
  }

  handleChange(type) {
    return e => this.setState({ [type]: e.target.value })
  }

  handleDemo(e) {
    e.preventDefault();
    this.setState(
      { email: "demo@gmail.com", password: "helloworld" },
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
          <i className="fa fa-times" aria-hidden="true"></i>
        </div>
        <div className="session-form-container">
          <form onSubmit={this.handleSubmit} className="session-form">
            <img className="session-form-logo" src="https://res.cloudinary.com/dezmnl5mf/image/upload/v1512150412/taskwombat_logo_gnnuiq.png"/>
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
            <div className="extras login-extras">
              <a className="demo-login" onClick={this.handleDemo}>Click for demo login!</a>
              <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm;
