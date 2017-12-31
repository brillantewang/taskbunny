import React from 'react';
import { Link } from 'react-router-dom';
import todaysDateString from '../util/todays_date_util';

export const TaskCategories = ({ text, setTaskType, createTask, currentUser, history, location }) => {
  const taskCategories = [
    { title: "Minor Repairs", img_url: "https://res.cloudinary.com/dezmnl5mf/image/upload/v1511562978/minor_repairs_bozruc.jpg" },
    { title: "Mounting", img_url: "https://res.cloudinary.com/dezmnl5mf/image/upload/c_crop,h_618,w_637,x_0,y_22/v1511572825/splash_body_img2_q8ekt9.jpg" },
    { title: "Assembly", img_url: "https://res.cloudinary.com/dezmnl5mf/image/upload/c_crop,h_565,w_647/v1511562965/assemble_ikea_furniture_iidk4g.jpg" },
    { title: "Help Moving", img_url: "https://res.cloudinary.com/dezmnl5mf/image/upload/c_crop,h_1125,w_1169,x_777/v1511562976/moving_ycbwmw.jpg" },
    { title: "Wait in Line", img_url: "https://res.cloudinary.com/dezmnl5mf/image/upload/c_crop,h_720,w_756/v1511562987/wait_in_line_p6jeak.webp" },
    { title: "Shopping", img_url: "https://res.cloudinary.com/dezmnl5mf/image/upload/c_crop,h_3776,w_3648/v1511562995/shopping_kpew3f.jpg" },
    { title: "Pet Sitting", img_url: "https://res.cloudinary.com/dezmnl5mf/image/upload/c_crop,h_3264,w_3648/v1511562981/pet_sitting_njnxv2.jpg" },
    { title: "Birthday and Party Planning", img_url: "https://res.cloudinary.com/dezmnl5mf/image/upload/c_crop,h_2000,w_2134/v1511562966/birthday_and_party_planning_q2wyig.jpg" },
    { title: "Run Errands", img_url: "https://res.cloudinary.com/dezmnl5mf/image/upload/c_crop,h_1003,w_1046,x_407/v1511562983/run_errands_naxs3u.jpg" },
    { title: "Web Design & Development", img_url: "https://res.cloudinary.com/dezmnl5mf/image/upload/c_crop,h_979,w_1021,x_0/v1511562988/web_design_and_development_qizueo.jpg" },
    { title: "Graphic Design", img_url: "https://res.cloudinary.com/dezmnl5mf/image/upload/c_crop,h_1150,w_1263/v1511562975/graphic_design_cksf9y.jpg" },
    { title: "Decoration Help", img_url: "https://res.cloudinary.com/dezmnl5mf/image/upload/c_crop,h_490,w_552/v1511562965/decoration_help_xyyaor.jpg" },
    { title: "Arts and Crafts", img_url: "https://res.cloudinary.com/dezmnl5mf/image/upload/c_crop,h_2126,w_2213/v1511563121/arts_and_crafts_zdjicp.jpg" },
    { title: "Entertain Guests", img_url: "https://res.cloudinary.com/dezmnl5mf/image/upload/c_crop,h_3264,w_3371/v1511562974/entertain_guests_viwxpv.jpg" },
    { title: "Research", img_url: "https://res.cloudinary.com/dezmnl5mf/image/upload/c_crop,h_3264,w_3633/v1511562986/research_hq9h4q.jpg" },
    { title: "Writing & Editing", img_url: "https://res.cloudinary.com/dezmnl5mf/image/upload/c_crop,h_3840,w_3987/v1511562991/writing_and_editing_mmtlhk.jpg" },
    { title: "Organize Home", img_url: "https://res.cloudinary.com/dezmnl5mf/image/upload/c_crop,h_2000,w_2183,x_110/v1511562980/organize_home_wplu73.jpg" },
    { title: "Rearrange Furniture", img_url: "https://res.cloudinary.com/dezmnl5mf/image/upload/c_crop,h_3456,w_3881/v1511562982/rearrange_furniture_tjewjo.jpg" },
    { title: "Cooking & Baking", img_url: "https://res.cloudinary.com/dezmnl5mf/image/upload/c_crop,h_2763,w_3042/v1511562973/cooking_and_baking_yawzns.jpg" },
    { title: "Grocery Shopping", img_url: "https://res.cloudinary.com/dezmnl5mf/image/upload/c_crop,h_3456,w_3733/v1511562976/grocery_shopping_d3sywc.jpg" },
    { title: "General Cleaning", img_url: "https://res.cloudinary.com/dezmnl5mf/image/upload/c_crop,h_3648,w_4163/v1511562973/general_cleaning_wnm6r4.jpg" },
    { title: "Pick Up & Delivery", img_url: "https://res.cloudinary.com/dezmnl5mf/image/upload/c_crop,h_530,w_609,x_233/v1511562978/pickup_and_delivery_wuaqal.jpg" },
    { title: "Automotive Help", img_url: "https://res.cloudinary.com/dezmnl5mf/image/upload/c_crop,h_4000,w_4423/v1511562968/automotive_help_ql8oax.jpg" },
    { title: "General Handyman", img_url: "https://res.cloudinary.com/dezmnl5mf/image/upload/c_crop,h_1200,w_1348,x_0/v1511562971/general_handyman_lslzpy.jpg" },
    { title: "Yard work", img_url: "https://res.cloudinary.com/dezmnl5mf/image/upload/c_crop,h_420,w_455/v1511562988/yard_work_byqags.jpg" }
  ]

  const handleClick = (taskCategory) => {
    if (location.pathname === "/") {
      history.push("/login")
    }
    else {
      createTask({user_id: currentUser.id, task_type: taskCategory.title, date: todaysDateString, task_time: "I'm Flexible"}).then(
        () => history.push('/task-form/details')
      )
    }
  }

  if (text === "") {
    return (
      <div id="task-categories" className="hidden">
        {taskCategories.slice(0, 4).map(taskCategory => {
          return (
            <a
              key={taskCategory.title}
              className="task-category search"
              onClick={() => handleClick(taskCategory)}>
              <img className="task-category-img search" src={taskCategory.img_url}/>
              <strong className="task-category-title search">{taskCategory.title}</strong>
            </a>
          )
        })}
      </div>
    )
  } else {
    const regex = new RegExp(text, 'i');
    const matchedCategories = taskCategories.filter(taskCategory => {
      return regex.test(taskCategory.title);
    })
    console.log(matchedCategories, 'matchedCategories');

    if (matchedCategories.length > 0) {
      console.log('in the if');
      return (
        <div id="task-categories">
          {matchedCategories.slice(0, 4).map(taskCategory => {
            return (
              <a
                key={taskCategory.title}
                className="task-category search"
                onClick={() => handleClick(taskCategory)}>
                <img className="task-category-img search" src={taskCategory.img_url}/>
                <strong className="task-category-title search">{taskCategory.title}</strong>
              </a>
            )
          })}
        </div>
      )
    } else {
      return (
        <div
          id="task-categories">
          <div className="no-tasks-text-container">
            <strong>Oops, "{text}" isn't currently a recognized task.</strong>
          </div>
        </div>
      )
    }

  }
}
