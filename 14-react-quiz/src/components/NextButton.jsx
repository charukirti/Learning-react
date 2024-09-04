export default function NextButton({ dispatch, answer, index, numOuestions }) {
  if (answer === null) return null;

  if(index < numOuestions - 1)
  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "nextQuestion" })}
    >
      Next
    </button>
  );

  if(index === numOuestions - 1) 
    return(
      <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "finish" })}
    >
      Finish
    </button>
    )
}
