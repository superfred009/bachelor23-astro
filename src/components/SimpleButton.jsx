export const SimpleButton = () => {
  const handleClick = () => {
    alert('button clicked');
  };
  return <button onClick={handleClick}>Click me!</button>;
};
