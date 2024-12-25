import React from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import HomePage from "./components/HomePage";
import Chart from "./components/Chart";
import { TransactionProvider } from "./transactionProvider/TransactionContext";
import TransactionList from "./components/TransactionList";

const App = () => {
  return (
    <TransactionProvider>
      <Router>
        <h1 className="text-xl font-bold">Expense Tracker</h1>
        <div className="min-h-screen bg-gray-100">
          <nav className="bg-white px-8 pt-2 shadow-md">
            <div className="-mb-px flex justify-center">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xs py-3 mr-8"
                    : "no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8"
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xs py-3 mr-8"
                    : "no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8"
                }
                to="/chart"
              >
                Chart
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xs py-3 mr-8"
                    : "no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8"
                }
                to="/transactionList"
              >
                Transaction List
              </NavLink>
            </div>
          </nav>
          <div className="container mx-auto mt-4">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/chart" element={<Chart />} />
              <Route path="/transactionList" element={<TransactionList />} />
            </Routes>
          </div>
        </div>
      </Router>
    </TransactionProvider>
  );
};

export default App;
