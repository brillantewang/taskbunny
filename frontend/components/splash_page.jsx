import React from 'react';
import { Link } from 'react-router-dom';
import { FooterNav } from './footer_nav';
import { TaskCategories } from './task_categories';
import NavBarContainer from './nav_bar_container';

class SplashPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    }

    this.toggleInputCanceler = this.toggleInputCanceler.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggleInputCanceler() {
    if (this.state.text === "" ) {
      $(".fa-times-circle").addClass("hidden");
    } else {
      $(".fa-times-circle").removeClass("hidden");
    }
  }

  handleChange(e) {
    this.setState(
      { text: e.target.value },
      this.toggleInputCanceler
    );
  }

  handleClick(e) {
    const node = $(e.target);
    console.log(node.attr('class'));
    switch(node.attr('class')) {
      case "task-search":
        $(".task-categories").removeClass("hidden");
        break;
      case "task-category":
        $(".task-categories").removeClass("hidden");
        break;
      case "fa fa-times-circle":
        this.setState(
          { text: "" },
          this.toggleInputCanceler
        );
        $(".task-categories").addClass("hidden");
        break;
      default:
        $(".task-categories").addClass("hidden");
    }
  }

  render() {
    return (
      <div onClick={this.handleClick} className="splash-page">
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
            <input className="task-search" type="text" value={this.state.text} onChange={this.handleChange} placeholder="Need something different?"/>
            <i className="fa fa-times-circle hidden" aria-hidden="true"></i>
            <TaskCategories text={this.state.text}/>
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
