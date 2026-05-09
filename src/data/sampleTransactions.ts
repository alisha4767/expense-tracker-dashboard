import type { Transaction } from "../types/transaction";

export const sampleTransactions: Transaction[] = [
  {
    id: "1",
    title: "Monthly Salary",
    amount: 45000,
    type: "Income",
    category: "Salary",
    date: "2026-05-01",
    note: "Salary credited",
  },
  {
    id: "2",
    title: "Grocery Shopping",
    amount: 2500,
    type: "Expense",
    category: "Food",
    date: "2026-05-03",
    note: "Bought monthly groceries",
  },
  {
    id: "3",
    title: "Online Course",
    amount: 1200,
    type: "Expense",
    category: "Education",
    date: "2026-05-05",
    note: "React course payment",
  },
];
