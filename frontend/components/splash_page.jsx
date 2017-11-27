import React from 'react';
import { Link } from 'react-router-dom';
import { FooterNav } from './footer_nav';
import { TaskCategories } from './task_categories';
import { SplashHead } from './splash_head';
import { SplashBody } from './splash_body';
import NavBarContainer from './nav_bar_container';
import classNames from 'classnames';

class SplashPage extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   text: ""
    // }

    // this.toggleInputCanceler = this.toggleInputCanceler.bind(this);
    this.handleClick = this.handleClick.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }

  // toggleInputCanceler() {
  //   const inputCanceler = document.getElementById("input-canceler");
  //   if (this.state.text === "") {
  //     inputCanceler.classList.add("hidden");
  //   } else {
  //     inputCanceler.classList.remove("hidden");
  //   }
  // }
  //
  // handleChange(e) {
  //   this.setState(
  //     { text: e.target.value },
  //     this.toggleInputCanceler
  //   );
  // }
  //
  // resetState() {
  //   this.setState(
  //     { text: "" },
  //     this.toggleInputCanceler
  //   )
  // }

  handleClick(e) {
    const nodeClasses= e.target.classList;
    console.log(nodeClasses);
    // if (nodeClasses.contains("fa-times-circle")) this.resetState();
    const taskCategoriesClass = classNames({
      'hidden': !nodeClasses.contains("search")
    })

    document.getElementById('task-categories').className = taskCategoriesClass;
  }

  render() {
    return (
      <div onClick={this.handleClick} className="splash-page">
        <NavBarContainer/>
        <SplashHead/>
        <SplashBody/>
        <FooterNav/>
      </div>
    )
  }
}

export default SplashPage;
// text={this.state.text} handleChange={this.handleChange}
