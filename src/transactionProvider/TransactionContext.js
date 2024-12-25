import React, { createContext, useContext, useState } from "react";

const TransactionContext = createContext();

export const useTransaction = () => useContext(TransactionContext);

export const TransactionProvider = ({ children }) => {
    const [transactions, setTransactions] = useState(
        JSON.parse(localStorage.getItem("transactions")) || []
    );

    const addTransaction = (newTransaction) => {
        const updatedTransactions = [...transactions, newTransaction];
        setTransactions(updatedTransactions);
        localStorage.setItem("transactions", JSON.stringify(updatedTransactions));
    };

    const deleteTransaction = (id) => {
        const updatedTransactions = transactions.filter((t) => t.id !== id);
        setTransactions(updatedTransactions);
        localStorage.setItem("transactions", JSON.stringify(updatedTransactions));
    };

    return (
        <TransactionContext.Provider value={{ transactions, addTransaction, deleteTransaction }}>
            {children}
        </TransactionContext.Provider>
    );
};
