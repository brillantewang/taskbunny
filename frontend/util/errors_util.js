import React from 'react';

export const handleErrorInput = function (type) {
  const regex = new RegExp(type);
  console.log(this, 'handleerrorinput');
  const error = this.props.errors.filter(error => { return error.match(regex) })[0];
  if (error) {
    $(`.${type}`).addClass("error-input");
    return (
      <strong className="error-message">{error}</strong>
    );
  } else {
    $(`.${type}`).removeClass("error-input");
  }
}
