import React, { useState } from "react";
import { CloseButton } from "@chakra-ui/close-button";
import TransactionForm from "./TransactionForm";

import { useTransaction } from "../transactionProvider/TransactionContext";

const HomePage = () => {
  const { transactions, addTransaction } = useTransaction();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalBalance = totalIncome - totalExpense;

  const handleAddTransactionClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <hr />
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-700">Totals</h2>
        <div className="flex justify-between items-center">
          <p className="text-lg font-medium text-gray-600">Total Income:</p>
          <p className="text-lg font-semibold text-green-500">${totalIncome}</p>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-lg font-medium text-gray-600">Total Expense:</p>
          <p className="text-lg font-semibold text-red-500">${totalExpense}</p>
        </div>

        <div className="flex justify-between items-center bg-red-200">
          <p className="text-lg font-medium text-gray-600">Total Balance:</p>
          <p
            className={`text-lg font-semibold ${
              totalBalance >= 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            ${totalBalance}
          </p>
        </div>
      </div>
      <button
        onClick={handleAddTransactionClick}
        className="mt-4 px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600"
      >
        Add Transaction
      </button>

      <hr className="my-6" />
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <div
              onClick={handleCloseModal}
              className="w-full py-2 flex justify-end"
            >
              <CloseButton />
            </div>
            <TransactionForm
              onAddTransaction={(newTransaction) => {
                addTransaction(newTransaction);
                setIsModalOpen(false);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
