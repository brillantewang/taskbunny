import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      zip_code: "",
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state)
      .then(() => this.props.history.push('/dashboard'));
    $("input").addClass("error-input");
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
              <label>First Name</label>
              <input type="text" value={this.state.first_name} onChange={this.handleChange('first_name')}/>
              <strong className="error-message">{this.props.errors.filter(error => { return error.match(/First/) })[0]}</strong>
            </fieldset>
            <fieldset>
              <label>Last Name</label>
              <input type="text" value={this.state.last_name} onChange={this.handleChange('last_name')}/>
              <strong className="error-message">{this.props.errors.filter(error => { return error.match(/Last/) })[0]}</strong>
            </fieldset>
            <fieldset>
              <label>Email Address</label>
              <input type="text" value={this.state.email} onChange={this.handleChange('email')}/>
              <strong className="error-message">{this.props.errors.filter(error => { return error.match(/Email/) })[0]}</strong>
            </fieldset>
            <fieldset>
              <label>Password</label>
              <input type="password" value={this.state.password} onChange={this.handleChange('password')}/>
              <strong className="error-message">{this.props.errors.filter(error => { return error.match(/Password/) })[0]}</strong>
            </fieldset>
            <fieldset>
              <label>Zip Code</label>
              <input type="text" value={this.state.zip_code} onChange={this.handleChange('zip_code')}/>
              <strong className="error-message">{this.props.errors.filter(error => { return error.match(/Zip/) })[0]}</strong>
            </fieldset>
            <button>Create account</button>
          </form>
        </div>
      </div>
    )
  }
}

export default SignupForm;
