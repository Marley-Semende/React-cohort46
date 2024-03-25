import PropTypes from "prop-types";

const Button = ({ label, onClick }) => {
  return (
    <div className="btn-container">
      <button onClick={() => onClick(label)}>{label}</button>
    </div>
  );
};
Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
