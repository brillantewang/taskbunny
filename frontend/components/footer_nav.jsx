import React from 'react';
import ReactDOM from 'react-dom';
import Scroll from 'react-scroll';
import { scroller } from 'react-scroll';
import ScrollArea from 'react-scrollbar';

export const FooterNav = () => {
  // const scroll = Scroll.animateScroll;

  return (
    <div className="footer-nav">
      {/* <ScrollArea
        speed="0.8"
        className="area"
        contentClassName="content"
        horizontal="false">
        <div>Some long content.Some long content.Some long content.Some long content.Some long content.Some long content.Some long content.Some long content.Some long content.Some long content.Some long content.Some long content.Some long content.Some long content.</div>
      </ScrollArea> */}
      <nav>
        <strong>Discover</strong>
        <a onClick={scroll.scrollToTop}>Become a Tasker</a>
        <a>The TaskWombat Elite</a>
        <a>Buy a Gift Card</a>
        <a>TaskWombat for Good</a>
        <a>Help</a>
      </nav>
      <nav>
        <strong>Company</strong>
        <a>About Us</a>
        <a>Careers</a>
        <a>Press</a>
        <a>Blog</a>
        <a>Terms & Privacy</a>
      </nav>
      <div>
        <strong>Download our app</strong>
        <p>Tackle your to-do list whenever you are with our mobile <br/> app.</p>
        <a><img className="apple-btn" src="https://res.cloudinary.com/dezmnl5mf/image/upload/v1511656899/apple_store_p88mul.svg"/></a>
        <a><img className="google-btn" src="https://res.cloudinary.com/dezmnl5mf/image/upload/v1511656896/google_play_badge_tbnnu4.svg"/></a>
      </div>
    </div>
  )
}
