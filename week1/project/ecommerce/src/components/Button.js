import PropTypes from "prop-types";

const Button = ({ label, onButtonClick }) => {
  return (
    <div className="btn-container">
      <button onClick={() => onButtonClick(label)}>{label}</button>
    </div>
  );
};
Button.propTypes = {
  label: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default Button;
