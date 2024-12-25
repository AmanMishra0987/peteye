import React from "react";
import { useTransaction } from "../transactionProvider/TransactionContext";

const TransactionList = () => {
  const { transactions, deleteTransaction } = useTransaction();
  const handleDelete = (id) => {
    deleteTransaction(id);
  };
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Transaction List
      </h2>

      <ul className="space-y-4">
        {transactions.map((transaction) => (
          <li
            key={transaction.id}
            className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col">
              <span className="text-gray-700 font-medium text-sm">
                {transaction.date} | {transaction.category}
              </span>
              <span className="text-gray-600 text-sm">
                {transaction.description}
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <span
                className={`font-semibold ${
                  transaction.type === "income"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {transaction.type === "income" ? "+" : "-"}${transaction.amount}
              </span>
              <button
                onClick={() => handleDelete(transaction.id)}
                className="text-xs text-red-500 hover:text-red-700 transition-colors"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
