import LiftingStateUp from "./LifitingStateUp";

function App() {
  function getData(data) {
    console.log(data);
  }

  return (
    <>
      <LiftingStateUp myClick={getData} />
    </>
  );
}

export default App;
