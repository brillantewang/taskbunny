import React from 'react';
import { Link } from 'react-router-dom';

export const TaskCategories = ({ text }) => {
  const taskCategories = [
    "Minor Repairs",
    "Mounting",
    "Assembly",
    "Help Moving",
    "Wait in Line",
    "Shopping",
    "Pet Sitting",
    "Birthday and Party Planning",
    "Run Errands",
    "Web Design $ Development",
    "Usability Testing",
    "Graphic Design",
    "Decoration Help",
    "Arts and Crafts",
    "Entertain Guests",
    "Research",
    "Writing & Editing",
    "Organize Home",
    "Rearrange Furniture",
    "Lifting & Shifting",
    "Take Furniture Apart & Move It",
    "Cooking & Baking",
    "Grocery Shopping",
    "Dog Walking",
    "Assemble IKEA Furniture",
    "General Cleaning",
    "Deep Clean",
    "Pick Up & Delivery",
    "Automotive Help",
    "General Handyman",
    "Moving & Packing",
    "Furniture assembly",
    "Home improvement",
    "Yard work"
  ]

  if (text === "" ) {
    return (
      <div className="task-categories hidden">
        {taskCategories.slice(0, 4).map(taskCategory => {
          return (
            <Link to="link" key={taskCategory} className="task-category">
              {taskCategory}
            </Link>
          )
        })}
      </div>
    )
  } else {
    const regex = new RegExp(text, 'i');
    const matchedCategories = taskCategories.filter(taskCategory => {
      return regex.test(taskCategory);
    })

    return (
      <div className="task-categories hidden">
        {matchedCategories.slice(0, 4).map(taskCategory => {
          return (
            <Link to="/link" key={taskCategory} className="task-category">
              {taskCategory}
            </Link>
          )
        })}
      </div>
    )
  }
}
