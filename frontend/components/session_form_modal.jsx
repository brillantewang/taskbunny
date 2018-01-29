import React from 'react';
import { Link } from 'react-router-dom';

class SessionFormModal extends React.Component {
  constructor(props) {
    super(props);

    console.log(props);

    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      zip_code: ""
    };
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

  handleErrorInput(type) {
    const regex = new RegExp(type);
    const error = this.props.errors.filter(error => { return error.match(regex) })[0];
    if (error) {
      $(`.${type}`).addClass("error-input");
      return (
        <strong className="error-message">{error}</strong>
      );
    } else {
      $(`.${type}`).removeClass("error-input");
    }
  }

  handleChange(type) {
    return e => this.setState({ [type]: e.target.value })
  }

  render() {
    return (
      <div className="session-form-modal">
        <div className="session-form-container">
          <form onSubmit={this.handleSubmit.bind(this)} className="session-form">
            <h3>Create an account</h3>
            <p>You'll be able to review everything before booking</p>
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
            <button className="btn-green">Create account</button>
            <div className="extras signup-extras">
              <p>Already have an account? <Link to="/login">Log in</Link></p>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default SessionFormModal;
