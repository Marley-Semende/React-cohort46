import PropTypes from "prop-types";

const Button = ({ button, onButtonClick }) => {
  const handleClick = () => {
    onButtonClick(button);
  };

  return (
    <div className="btn-container">
      <button onClick={handleClick}>{button}</button>
    </div>
  );
};
Button.propTypes = {
  button: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default Button;
