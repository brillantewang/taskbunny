import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
    // this.props.history.push('/#');
  }

  handleChange(type) {
    return e => this.setState({ [type]: e.target.value })
  }

  render() {
    return (
      <div>
        <h1>{this.props.formType === 'login' ? 'Log in' : 'Sign up'}</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
            Email:
            <input type="text" value={this.state.email} onChange={this.handleChange('email')}/>
          </label>
          <label>
            Password:
            <input type="text" value={this.state.password} onChange={this.handleChange('password')}/>
          </label>
          <input type="submit" value="Submit"/>
        </form>
        {this.props.formType === 'login' ? <Link to="/signup">Sign up</Link> : <Link to="/signup">Sign up</Link>}
        {this.props.errors}
      </div>
    )
  }
}

export default SessionForm;
