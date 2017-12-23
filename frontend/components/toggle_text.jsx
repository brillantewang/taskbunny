import React from 'react';

class ToggleText extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: true,
      text: "Show Details",
    }
  }

  toggle() {
    if (this.state.hidden) {
      this.setState({
        hidden: false,
        text: "Hide details"
      })
    } else {
      this.setState({
        hidden: true,
        text: "Show details"
      })
    }
  }

  render() {
    return (
      <strong onClick={this.toggle.bind(this)}>
        {this.state.text}
      </strong>
    )
  }
}

export default ToggleText;
