import React from 'react';
import { Link } from 'react-router-dom';
import { handleErrorInput } from '../util/errors_util';
import classNames from 'classnames';

class SessionFormModal extends React.Component {
  constructor(props) {
    super(props);

    console.log(props);

    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      zip_code: "",
      login_modal: false
    };

    this.handleErrorInput = handleErrorInput.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state)
      .then(userRes => {
        console.log(userRes.user.id);
        this.props.setState({ user_id: userRes.user.id }, () => {
          this.props.updateTask(this.props.state)
            .then(() => this.props.history.push('/task-form/confirm'))
        });
      });
  }

  handleLoginSubmit(e) {
    e.preventDefault();
    this.props.login({ email: this.state.email, password: this.state.password })
      .then(userRes => {
        console.log(userRes.user.id);
        this.props.setState({ user_id: userRes.user.id }, () => {
          this.props.updateTask(this.props.state)
            .then(() => this.props.history.push('/task-form/confirm'))
        });
      });
  }

  toggleLoginModal() {
    this.props.removeErrors();
    this.setState({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      zip_code: "",
      login_modal: !this.state.login_modal
    })
  }

  handleChange(type) {
    return e => this.setState({ [type]: e.target.value })
  }

  handleDemo(e) {
    e.preventDefault();
    this.setState(
      { email: "demo@gmail.com", password: "helloworld" },
      () => this.handleLoginSubmit(e)
    )
  }

  render() {
    const errorModalClassName = classNames({
      hidden: this.props.errors.length === 0 ||
              this.props.errors.length > 0 && !this.props.errors[0].includes("Incorrect")
    })

    if (this.state.login_modal) {
      return (
        <div className="session-form-modal">
          <div id="error-modal" className={errorModalClassName} onClick={this.props.removeErrors}>
            <strong>{this.props.errors}</strong>
            <i className="fa fa-times" aria-hidden="true"></i>
          </div>
          <div className="session-form-container">
            <form onSubmit={this.handleLoginSubmit.bind(this)} className="session-form">
              <h3 className="session-form-modal-header">Please log in to continue</h3>
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
                <a className="demo-login" onClick={this.handleDemo}>Demo login</a>
                <p>Don't have an account? <a onClick={this.toggleLoginModal.bind(this)}>Sign up</a></p>
              </div>
            </form>
          </div>
        </div>
      )
    } else {
      return (
        <div className="session-form-modal">
          <div className="session-form-container">
            <form onSubmit={this.handleSubmit.bind(this)} className="session-form">
              <h3 className="session-form-modal-header">Create an account</h3>
              <p className="session-form-modal-subheader">You'll be able to review everything before booking</p>
              <fieldset>
                <label>First Name</label>
                <input type="text" value={this.state.first_name} onChange={this.handleChange('first_name')} className="First session-input"/>
                {this.handleErrorInput("First")}
              </fieldset>
              <fieldset>
                <label>Last Name</label>
                <input type="text" value={this.state.last_name} onChange={this.handleChange('last_name')} className="Last session-input"/>
                {this.handleErrorInput("Last")}
              </fieldset>
              <fieldset>
                <label>Email Address</label>
                <input type="text" value={this.state.email} onChange={this.handleChange('email')} className="Email session-input"/>
                {this.handleErrorInput("Email")}
              </fieldset>
              <fieldset>
                <label>Password</label>
                <input type="password" value={this.state.password} onChange={this.handleChange('password')} className="Password session-input"/>
                {this.handleErrorInput("Password")}
              </fieldset>
              <fieldset>
                <label>Zip Code</label>
                <input type="text" value={this.state.zip_code} onChange={this.handleChange('zip_code')} className="Zip session-input"/>
                {this.handleErrorInput("Zip")}
              </fieldset>
              <button className="btn-green">Sign up</button>
              <div className="extras signup-extras">
                <p>Already have an account? <a onClick={this.toggleLoginModal.bind(this)}>Log in</a></p>
              </div>
            </form>
          </div>
        </div>
      )
    }
  }
}

export default SessionFormModal;
