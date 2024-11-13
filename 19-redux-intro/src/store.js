import { createStore } from "redux"; // it is deprecated and recommended to use modern redux-toolkit

const initialState = {
    balance: 0,
    loan: 0,
    loanPurpose: ''
};

// goal of the reducer is calculate the new state, based on the current result

// here we pass initialState directly as default parameter

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'account/deposit':
            return {
                ...state, balance: state.balance + action.payload
            };
        case 'account/withdraw':
            return {
                ...state, balance: state.balance - action.payload
            };
        case 'account/requestLoan': //Will see it LATER
            if (state.loan > 0) return state;
            return {
                ...state,
                loan: action.payload.amount,
                loanPurpose: action.payload.purpose,
                balance: state.balance + action.payload.amount
            };

        case 'account/payLoan':
            return {
                ...state,
                loan: 0,
                loanPurpose: '',
                balance: state.balance - state.loan
            };
        default:
            return state;
    }

}

// creating store

const store = createStore(reducer);

store.dispatch({ type: 'account/deposit', payload: 5000 });

// to get current state of the store

console.log(store.getState());
store.dispatch({ type: 'account/withdraw', payload: 500 });
console.log(store.getState());

store.dispatch({ type: 'account/requestLoan', payload: { amount: 1000, purpose: 'to Buy a mobile' } });
console.log(store.getState())
store.dispatch({ type: 'account/payLoan' });
console.log(store.getState())


