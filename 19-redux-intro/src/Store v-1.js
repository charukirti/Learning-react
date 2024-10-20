import { combineReducers, createStore } from "redux";


// created reducer 

const initialAccountState = {
    balance: 0,
    loan: 0,
    loanPurpose: '',
};

const initialCustomerState = {
    fullName: '',
    nationalID: '',
    createdAt: ''
};

function accountReducer(state = initialAccountState, action) {
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


function customerReducer(state = initialCustomerState, action) {
    switch (action.type) {
        case 'customer/createCustomer':
            return { ...state, fullName: action.payload.fullName, nationalID: action.payload.nationalID, createdAt: action.payload.createdAt };

        case 'customer/updateName':
            return { ...state, fullName: action.payload };
        default:
            return state;
    }
}


// combining all the reducers

const rootReducer = combineReducers({
    account: accountReducer,
    customer: customerReducer,
})

// creating store

const store = createStore(rootReducer);

// store.dispatch({ type: 'account/deposit', payload: 1200 });
// store.dispatch({ type: 'account/withdraw', payload: 120 });
// console.log(store.getState());

// store.dispatch({ type: 'account/requestLoan', payload: { amount: 1000, purpose: 'Buy a car' } });
// console.log(store.getState());

// store.dispatch({ type: 'account/payLoan' });
// console.log(store.getState())


// practicing creating store

// store.dispatch({ type: 'account/deposit', payload: 2000 });
// console.log(store.getState());

// store.dispatch({ type: 'account/withdraw', payload: 80 });
// console.log(store.getState());

// store.dispatch();
// console.log(store.getState());

// store.dispatch({ type: 'account/payLoan' });
// console.log(store.getState())


// Action creators for each actions

function deposit(amount) {
    return { type: 'account/deposit', payload: amount };
}

function withdraw(amount) {
    return { type: 'account/withdraw', payload: amount };
}

function requestLoan(amount, purpose) {
    return { type: 'account/requestLoan', payload: { amount, purpose } };
}

function payLoan() {
    return { type: 'account/payLoan' };
}


store.dispatch(deposit(5000));
console.log(store.getState());

store.dispatch(withdraw(3000));
console.log(store.getState());

store.dispatch(requestLoan(3000, 'To buy new course'));
console.log(store.getState());

store.dispatch(payLoan());
console.log(store.getState());

store.dispatch(deposit(3000));
console.log(store.getState());


function createCustomer(fullName, nationalID) {
    return { type: 'customer/createCustomer', payload: { fullName, nationalID, createdAt: new Date().toISOString() } };
}

function updateName(fullName) {
    return { type: 'customer/updateName', payload: fullName };
}


// using customer actions

store.dispatch(createCustomer('Albert', '21AB4'))
console.log(store.getState())