import { createStore } from "redux";


// created reducer 

const initialState = {
    balance: 0,
    loan: 0,
    loanPurpose: '',
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'account/deposit':
            return { ...state, balance: state.balance + action.payload };

        case 'account/withdraw':
            return { ...state, balance: state.balance - action.payload };

        case 'account/requestLoan':
            if (state.loan > 0) return 0;
            // LATER
            return { ...state, loan: action.payload.amount, loanPurpose: action.payload.purpose, balance: state.balance + action.payload.amount };
        case 'account/payLoan':
            return { ...state, loan: 0, loanPurpose: '', balance: state.balance - state.loan };

        default:
            return state;
    }
}

// creating store

const store = createStore(reducer);

store.dispatch({ type: 'account/deposit', payload: 1200 });
store.dispatch({ type: 'account/withdraw', payload: 120 });
// console.log(store.getState());

store.dispatch({ type: 'account/requestLoan', payload: { amount: 1000, purpose: 'Buy a car' } });
// console.log(store.getState());

store.dispatch({ type: 'account/payLoan' });
// console.log(store.getState())


// practicing creating store

store.dispatch({ type: 'account/deposit', payload: 2000 });
console.log(store.getState());

store.dispatch({ type: 'account/withdraw', payload: 80 });
console.log(store.getState());

store.dispatch({ type: 'account/requestLoan', payload: { amount: 80, purpose: 'pay tax' } });
console.log(store.getState());

store.dispatch({ type: 'account/payLoan' });
console.log(store.getState())