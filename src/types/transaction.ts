export type TransactionType = "Income" | "Expense";

export type TransactionCategory =
  | "Salary"
  | "Food"
  | "Travel"
  | "Shopping"
  | "Bills"
  | "Education"
  | "Other";

export interface Transaction {
  id: string;
  title: string;
  amount: number;
  type: TransactionType;
  category: TransactionCategory;
  date: string;
  note: string;
}