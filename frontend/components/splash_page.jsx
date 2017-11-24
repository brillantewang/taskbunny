import React from 'react';
import { Link } from 'react-router-dom';
import { FooterNav } from './footer_nav';
import NavBarContainer from './nav_bar_container';

class SplashPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    }
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleClick(e) {
    const node = $(e.target);
    switch(node.attr('class')) {
      case "task-search":
        $(".task-categories").removeClass("hidden");
        break;
      case "task-category":
        $(".task-categories").removeClass("hidden");
        break;
      case "fa fa-times-circle":
        this.setState({ text: "" });
        $(".task-categories").addClass("hidden");
        break;
      default:
        $(".task-categories").addClass("hidden");
    }
  }

  render() {
    return (
      <div onClick={this.handleClick.bind(this)} className="splash-page">
        <NavBarContainer/>
        <div className="splash-head">
          <h1 className="main-header">The convenient & fast way <br/> to get things done around the house</h1>
          <h3 className="sub-header">Choose from over 50,000 carefully vetted and feedback rated Taskers to get quick help</h3>
          <ul className="splash-head-buttons">
            <button>General handyman</button>
            <button>Moving & packing</button>
            <button>Furniture assembly</button>
            <button>Home improvement</button>
            <button>Mounting & installation</button>
            <button>Yard work</button>
          </ul>
          <div className="task-search-container">
            <i className="fa fa-search" aria-hidden="true"></i>
            <input className="task-search" type="text" value={this.state.text} onChange={this.handleChange.bind(this)} placeholder="Need something different?"/>
            <i className="fa fa-times-circle" aria-hidden="true"></i>
            <ul className="task-categories hidden">
              <li className="task-category"><Link to="/link">Option1</Link></li>
              <li className="task-category">Option2</li>
            </ul>
          </div>
        </div>
        <div className="splash-body">
          body
        </div>
        <FooterNav/>
      </div>
    )
  }
}

export default SplashPage;
