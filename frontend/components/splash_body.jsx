import React from 'react';
import todaysDateString from "../util/todays_date_util";
import { Link, withRouter } from 'react-router-dom';

// export const SplashBody = () => {
//   return (
//     <div className="splash-body">
//       <h1>Get Inspired</h1>
//       <div className="splash-body-top">
//         <Link to="/task-form/details" className="splash-body-top-item-1">
//           <img src="https://res.cloudinary.com/dezmnl5mf/image/upload/c_crop,h_2973,w_3877/v1511571163/splash-body-img1_gnn4se.jpg"/>
//         </Link>
//         <Link to="/login" className="splash-body-top-item-2">
//           <h3>Tackle those home projects & repairs you've been putting off</h3>
//           <button className="btn-green">Book Handyman</button>
//         </Link>
//       </div>
//       <div className="splash-body-bottom">
//         <Link to="/login">
//           <img className="splash-body-img" src="https://res.cloudinary.com/dezmnl5mf/image/upload/c_crop,h_501,w_565,x_0,y_60/v1511572825/splash_body_img2_q8ekt9.jpg"/>
//           <h3>Mount a TV or mirror</h3>
//           <button className="btn-green">Book Mounting</button>
//         </Link>
//         <Link to="/login">
//           <img className="splash-body-img" src="https://res.cloudinary.com/dezmnl5mf/image/upload/c_crop,h_469,w_573,x_0,y_26/v1511572825/splash_body_img3_y0fp9x.jpg"/>
//           <h3>Put together furniture</h3>
//           <button className="btn-green">Book Assembly</button>
//         </Link>
//         <Link to="/login">
//           <img className="splash-body-img" src="https://res.cloudinary.com/dezmnl5mf/image/upload/c_crop,h_381,w_445,x_859,y_400/v1511572825/splash_body_img4_mrpzwp.jpg"/>
//           <h3>Lift & shift heavy items</h3>
//           <button className="btn-green">Book Help Moving</button>
//         </Link>
//       </div>
//     </div>
//   )
// }

class SplashBody extends React.Component {
  constructor(props) {
    super(props);
  }

  handleImageClick(taskCategory) {
    this.props.createTask({task_type: taskCategory, date: todaysDateString, task_time: "I'm Flexible"}).then(
      () => this.props.history.push('/task-form/details')
    )
  }

  render() {
    return (
      <div className="splash-body">
        <h1>Get Inspired</h1>
        <div className="splash-body-top">
          <a
            className="splash-body-top-item-1"
            onClick={() => this.handleImageClick("General Handyman")}>
            <img src="https://res.cloudinary.com/dezmnl5mf/image/upload/c_crop,h_2973,w_3877/v1511571163/splash-body-img1_gnn4se.jpg"/>
          </a>
          <a
            className="splash-body-top-item-2"
            onClick={() => this.handleImageClick("General Handyman")}>
            <h3>Tackle those home projects & repairs you've been putting off</h3>
            <button className="btn-green">Book Handyman</button>
          </a>
        </div>
        <div className="splash-body-bottom">
          <a
            onClick={() => this.handleImageClick("Mounting")}>
            <img className="splash-body-img" src="https://res.cloudinary.com/dezmnl5mf/image/upload/c_crop,h_501,w_565,x_0,y_60/v1511572825/splash_body_img2_q8ekt9.jpg"/>
            <h3>Mount a TV or mirror</h3>
            <button className="btn-green">Book Mounting</button>
          </a>
          <a
            onClick={() => this.handleImageClick("Assembly")}>
            <img className="splash-body-img" src="https://res.cloudinary.com/dezmnl5mf/image/upload/c_crop,h_469,w_573,x_0,y_26/v1511572825/splash_body_img3_y0fp9x.jpg"/>
            <h3>Put together furniture</h3>
            <button className="btn-green">Book Assembly</button>
          </a>
          <a
            onClick={() => this.handleImageClick("Help Moving")}>
            <img className="splash-body-img" src="https://res.cloudinary.com/dezmnl5mf/image/upload/c_crop,h_381,w_445,x_859,y_400/v1511572825/splash_body_img4_mrpzwp.jpg"/>
            <h3>Lift & shift heavy items</h3>
            <button className="btn-green">Book Help Moving</button>
          </a>
        </div>
      </div>
    )
  }
}

export default withRouter(SplashBody);
