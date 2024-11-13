import { combineReducers, createStore } from "redux"; // it is deprecated and recommended to use modern redux-toolkit

const initialStateAccount = {
    balance: 0,
    loan: 0,
    loanPurpose: '',
};

const initialStateCustomer = {
    fullName: '',
    nationalID: '',
    createdAt: '',
}

// goal of the reducer is calculate the new state, based on the current result

// here we pass initialState directly as default parameter

function accountReducer(state = initialStateAccount, action) {
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

// customer reducer

function customerReducer(state = initialStateCustomer, action){
    switch(action.type){
       case 'customer/createCustomer' :
            return {...state, fullName: action.payload.fullName, nationalID: action.payload.nationalID, createdAt: action.payload.createdAt}
        
        case 'customer/updateName':
            return {...state, fullName: action.payload}

        default : 
            return state;
    }
}


// combining reducers

const rootReducer = combineReducers({
    account: accountReducer,
    customer: customerReducer,
})

// creating store

const store = createStore(rootReducer);

// store.dispatch({ type: 'account/deposit', payload: 5000 });

// to get current state of the store

// console.log(store.getState());
// store.dispatch({ type: 'account/withdraw', payload: 500 });
// console.log(store.getState());

// store.dispatch({ type: 'account/requestLoan', payload: { amount: 1000, purpose: 'to Buy a mobile' } });
// console.log(store.getState())
// store.dispatch({ type: 'account/payLoan' });
// console.log(store.getState())


// action creators are the functions which returns actions

function deposit(amount){
    return { type: 'account/deposit', payload: amount }
}
function withdraw(amount){
    return { type: 'account/withdraw', payload: amount }
}
function requestLoan(amount, purpose){
    return { type: 'account/requestLoan', payload: {amount, purpose} }
}
function payLoan(){
    return { type: 'account/payLoan'}
}

store.dispatch(deposit(5000))
store.dispatch(withdraw(2000))
store.dispatch(requestLoan(2000, 'Install SSD'))
store.dispatch(deposit(2000))
store.dispatch(payLoan())
console.log(store.getState())


function createCustomer(fullName, nationalID){
    return {
        type: 'customer/createCustomer',
        payload: {fullName, nationalID, createdAt: new Date().toISOString()}
    }
}

function updateName(fullName) {
    return {type: 'account/updateName', payload: fullName}
}

// customer action creators

store.dispatch(createCustomer('Jane Doe', 'USA123F45'))
console.log(store.getState())

store.dispatch(updateName('Sarah Doe'))
console.log(store.getState())