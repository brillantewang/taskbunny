import React from 'react';

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
    "General Handyman"
  ]

  if (text === "" ) {
    return (
      <div className="task-categories hidden">
        {taskCategories.slice(0, 4).map(taskCategory => {
          return (
            <li key={taskCategory} className="task-category">
              {taskCategory}
            </li>
          )
        })}
      </div>
    )
  } else {
    return (
      <div className="task-categories hidden">
        filtered
      </div>
    )
  }
}
