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
      .then(() => this.props.history.push('/dashboard'))
  }

  handleChange(type) {
    return e => this.setState({ [type]: e.target.value })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)} className="session-form">
          <fieldset>
            <label>First Name</label>
            <input type="text" value={this.state.first_name} onChange={this.handleChange('first_name')}/>
          </fieldset>
          <fieldset>
            <label>Last Name</label>
            <input type="text" value={this.state.last_name} onChange={this.handleChange('last_name')}/>
          </fieldset>
          <fieldset>
            <label>Email Address</label>
            <input type="text" value={this.state.email} onChange={this.handleChange('email')}/>
          </fieldset>
          <fieldset>
            <label>Password</label>
            <input type="text" value={this.state.password} onChange={this.handleChange('password')}/>
          </fieldset>
          <fieldset>
            <label>Zip Code</label>
            <input type="text" value={this.state.zip_code} onChange={this.handleChange('zip_code')}/>
          </fieldset>
          <button>Create account</button>
        </form>
        {this.props.errors}
      </div>
    )
  }
}

export default SignupForm;
