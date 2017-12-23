import React from 'react';

class ToggleText extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: true,
      text: <strong>Show Details <i className="fa fa-angle-down" aria-hidden="true"></i></strong>,
    }
  }

  toggle() {
    if (this.state.hidden) {
      this.setState({
        hidden: false,
        text: <strong>Hide Details <i className="fa fa-angle-up" aria-hidden="true"></i></strong>
      })
    } else {
      this.setState({
        hidden: true,
        text: <strong>Show Details <i className="fa fa-angle-down" aria-hidden="true"></i></strong>
      })
    }
  }

  render() {
    return (
      <span onClick={this.toggle.bind(this)}>
        {this.state.text}
      </span>
    )
  }
}

export default ToggleText;
