import React from 'react';

export const SplashBody = () => {
  return (
    <div className="splash-body">
      <h1>Get Inspired</h1>
      <div className="splash-body-top">
        <div className="splash-body-top-item-1">
          <img src="http://res.cloudinary.com/dezmnl5mf/image/upload/c_crop,h_2973,w_3877/v1511571163/splash-body-img1_gnn4se.jpg"/>
        </div>
        <div className="splash-body-top-item-2">
          <h3>Tackle those home projects & repairs you've been putting off</h3>
          <button>Book Handyman</button>
        </div>
      </div>
      <div className="splash-body-bottom">
        <div>
          <img className="splash-body-img" src="http://res.cloudinary.com/dezmnl5mf/image/upload/c_crop,h_623,w_534,y_22/v1511572825/splash_body_img2_q8ekt9.jpg"/>
          <h3>Mount a TV or mirror</h3>
          <button>Book Mounting</button>
        </div>
        <div>
          <img className="splash-body-img" src="http://res.cloudinary.com/dezmnl5mf/image/upload/c_crop,h_571,w_434,x_0/v1511572825/splash_body_img3_y0fp9x.jpg"/>
          <h3>Put together furniture</h3>
          <button>Book Assembly</button>
        </div>
        <div>
          <img className="splash-body-img" src="http://res.cloudinary.com/dezmnl5mf/image/upload/c_crop,h_469,w_380/v1511572825/splash_body_img4_mrpzwp.jpg"/>
          <h3>Lift & shift heavy items</h3>
          <button>Book Help Moving</button>
        </div>
      </div>
    </div>
  )
}
