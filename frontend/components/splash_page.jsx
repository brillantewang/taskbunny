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
      </div>
      <div className="splash-body">
        body
      </div>
      <FooterNav/>
    </div>
  )
}
