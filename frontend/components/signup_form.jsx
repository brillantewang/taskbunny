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
    this.props.signup(this.state);
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
            First Name
            <input type="text" value={this.state.first_name} onChange={this.handleChange('first_name')}/>
          </label>
          <label>
            Last Name
            <input type="text" value={this.state.last_name} onChange={this.handleChange('last_name')}/>
          </label>
          <label>
            Email Address
            <input type="text" value={this.state.email} onChange={this.handleChange('email')}/>
          </label>
          <label>
            Password
            <input type="text" value={this.state.password} onChange={this.handleChange('password')}/>
          </label>
          <label>
            Zip Code
            <input type="text" value={this.state.zip_code} onChange={this.handleChange('zip_code')}/>
          </label>
          <input type="submit" value="Create account"/>
        </form>
        {this.props.errors}
      </div>
    )
  }
}

export default SignupForm;
