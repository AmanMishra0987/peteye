import React, { useState } from "react";

const TransactionForm = ({ onAddTransaction }) => {
  const [type, setType] = useState("income");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Date.now(),
      type,
      amount: parseFloat(amount),
      category,
      date,
      description,
    };
    onAddTransaction(newTransaction);
    setType("income");
    setAmount("");
    setCategory("");
    setDate("");
    setDescription("");
  };
  return (
    <div className="p-6 rounded-lg w-full max-w-md mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Add Transaction
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex space-x-4">
          <button
            type="button"
            onClick={() => setType("income")}
            className={`px-4 py-2 w-full border rounded-md ${
              type === "income"
                ? "bg-teal-500 text-white"
                : "bg-white text-teal-500 border-teal-500"
            }`}
            disabled={type === "income"}
          >
            Income
          </button>
          <button
            type="button"
            onClick={() => setType("expense")}
            className={`px-4 py-2 w-full border rounded-md ${
              type === "expense"
                ? "bg-teal-500 text-white"
                : "bg-white text-teal-500 border-teal-500"
            }`}
            disabled={type === "expense"}
          >
            Expense
          </button>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Amount
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Date
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
          />
        </div>
        <button
          type="submit"
          className="mt-4 w-full px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default TransactionForm;
