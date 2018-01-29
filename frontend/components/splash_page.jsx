import React from 'react';
import { Link } from 'react-router-dom';
import { FooterNav } from './footer_nav';
import { TaskCategories } from './task_categories';
import SplashHead from './splash_head_container';
import SplashBody from './splash_body_container';
import NavBarContainer from './nav_bar_container';
import classNames from 'classnames';

class SplashPage extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const nodeClasses= e.target.classList;
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
