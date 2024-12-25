import React from "react";
import { Bar } from "react-chartjs-2";
import { useTransaction } from "../transactionProvider/TransactionContext";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const Chart = () => {
  const { transactions } = useTransaction();

  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalBalance = totalIncome - totalExpense;

  const data = {
    labels: ["Income", "Expense", "Balance"],
    datasets: [
      {
        label: "Financial Overview",
        data: [totalIncome, totalExpense, totalBalance],
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)",
          "rgba(255, 99, 132, 0.6)",
          "rgba(255, 206, 86, 0.6)",
        ],
      },
    ],
  };

  return (
    <div>
      <h1>Financial Overview Chart</h1>

      <Bar data={data} />
    </div>
  );
};

export default Chart;
