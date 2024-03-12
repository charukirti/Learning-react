function LiftingStateUp(props) {
  function handleClick(e) {
    e.preventDefault();

    let data = "I am child data";
    props.myClick(data)
  }

  return (
    <>
      <button onClick={handleClick}>Click me</button>
    </>
  );
}

export default LiftingStateUp;
