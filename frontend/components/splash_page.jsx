import React from 'react';
import { FooterNav } from './footer_nav';
import NavBarContainer from './nav_bar_container';

export const SplashPage = () => {
  return (
    <div className="splash-page">
      <NavBarContainer/>
      <div className="splash-head">
        <h1 className="main-header">The convenient & fast way <br/> to get things done around the house</h1>
        <h3 className="sub-header">Choose from over 50,000 carefully vetted and feedback rated Taskers to get quick help</h3>
        <ul class="splash-head-buttons">
          <button>General handyman</button>
          <button>Moving & packing</button>
          <button>Furniture assembly</button>
          <button>Home improvement</button>
          <button>Mounting & installation</button>
          <button>Yard work</button>
        </ul>
        <div className="task-search-container">
          <i class="fa fa-search" aria-hidden="true"></i>
          <input className="task-search" type="search" results placeholder="Need something different?"/>
        </div>
      </div>
      <div className="splash-body">
        body
      </div>
      <FooterNav/>
    </div>
  )
}
