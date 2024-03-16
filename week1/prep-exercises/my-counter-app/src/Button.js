function Button({ setCount }) {
  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };
  
  return (
    <button onClick={handleClick}>Add 1!</button>
  );
}

export default Button;
