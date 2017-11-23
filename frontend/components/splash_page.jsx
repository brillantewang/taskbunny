import React from 'react';
import { FooterNav } from './footer_nav';
import NavBarContainer from './nav_bar_container';

export const SplashPage = () => {
  return (
    <div className="splash-page">
      <NavBarContainer/>
      <div className="splash-head">
        head
      </div>
      <div className="splash-body">
        body
      </div>
      <FooterNav/>
    </div>
  )
}
