function Button({ setCount }) {
  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };
  
  return (
    <button onClick={handleClick}>Add One</button>
  );
}

export default Button;
