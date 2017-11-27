export const handleErrorInput = type => {
  const regex = new RegExp(type);
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
