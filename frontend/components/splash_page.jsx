import React from 'react';
import { Link } from 'react-router-dom';
import { FooterNav } from './footer_nav';
import { TaskCategories } from './task_categories';
import { SplashHead } from './splash_head';
import { SplashBody } from './splash_body';
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
      case "task-category-img":
        $(".task-categories").removeClass("hidden");
        break;
      case "task-category-title":
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
        <SplashHead text={this.state.text} handleChange={this.handleChange}/>
        <SplashBody/>
        <FooterNav/>
      </div>
    )
  }
}

export default SplashPage;
