import React, {useReducer, createContext} from 'react';

import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [{"amount":5000,"category":"Extra income","type":"Income","date":"2021-03-29","id":"e0c55af7-10ad-4489-bba4-9c13aff4087b"}];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState);

    // ANCHOR Action Creators
    const deleteTransaction = (id) => { dispatch({ type: 'DELETE_TRANSACTION', payload: id })}


    const addTransaction = (transaction) => {dispatch({ type: 'ADD_TRANSACTION', payload: transaction})}


    const balance = transactions.reduce((acc, currVal) => { return (currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount)}, 0);


    return(
        <ExpenseTrackerContext.Provider value={{
            deleteTransaction,
            addTransaction,
            transactions,
            balance
        }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}
