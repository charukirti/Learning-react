import { useReducer } from "react";

const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
};

function reducer(state, action) {
  if (!state.isActive && action.type !== "openAccount") return state;
  switch (action.type) {
    case "openAccount":
      return {
        ...state,
        balance: 500,
        loan: 0,
        isActive: true,
      };
    case "deposit":
      return {
        ...state,
        balance: state.balance + action.amount
      };
    case "withdraw":
      return {
        ...state,
        balance: state.balance > 0 ? state.balance - action.amount : 0,
      };
    case "requestLoan":
        if(state.loan > 0) return state;
      return {
        ...state,
        loan: action.amount,
        balance: state.balance + action.amount,
      };
    case "payLoan":
        if(state.balance < state.loan) return state;
      return {
        ...state,
        loan: 0,
        balance: state.balance - state.loan,
      };
    case "closeAccount":
        if(state.loan > 0 || state.balance !== 0) return state;
      return initialState;
  }
}

export default function Bank() {
  const [{ balance, loan, isActive }, dispatch] = useReducer(
    reducer,
    initialState
  );
  return (
    <>
      <div className="App">
        <h1>useReducer Bank Account</h1>
        <p>Balance: {balance}</p>
        <p>Loan: {loan}</p>

        <p>
          <button
            onClick={() => {
              dispatch({ type: "openAccount" });
            }}
            disabled={isActive}
          >
            Open account
          </button>
        </p>
        <p>
          <button
            onClick={() => {
              dispatch({ type: "deposit", amount: 150 });
            }}
            disabled={!isActive}
          >
            Deposit 150
          </button>
        </p>
        <p>
          <button
            onClick={() => {
              dispatch({ type: "withdraw", amount: 50 });
            }}
            disabled={!isActive}
          >
            Withdraw 50
          </button>
        </p>
        <p>
          <button onClick={() => {dispatch({type:'requestLoan', amount: 5000})}} disabled={!isActive}>
            Request a loan of 5000
          </button>
        </p>
        <p>
          <button onClick={() => {dispatch({type:'payLoan'})}} disabled={!isActive}>
            Pay loan
          </button>
        </p>
        <p>
          <button onClick={() => {dispatch({type: 'closeAccount'})}} disabled={!isActive}>
            Close account
          </button>
        </p>
      </div>
    </>
  );
}
