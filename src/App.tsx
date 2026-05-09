import { BudgetCard } from "./components/transactions/BudgetCard";
import { useMemo, useState } from "react";
import { EmptyState } from "./components/common/EmptyState";
import { StatCard } from "./components/common/StatCard";
import { TransactionFilters } from "./components/transactions/TransactionFilters";
import { TransactionForm } from "./components/transactions/TransactionForm";
import { TransactionList } from "./components/transactions/TransactionList";
import { sampleTransactions } from "./data/sampleTransactions";
import { useLocalStorage } from "./hooks/useLocalStorage";
import type { Transaction, TransactionType } from "./types/transaction";
import { formatCurrency } from "./utils/formatters";

function App() {
  const [transactions, setTransactions] = useLocalStorage<Transaction[]>(
    "expense-transactions",
    sampleTransactions
  );
  const [monthlyBudget, setMonthlyBudget] = useLocalStorage<number>(
  "monthly-budget",
  10000
);

  const [searchText, setSearchText] = useState("");
  const [selectedType, setSelectedType] = useState<"All" | TransactionType>(
    "All"
  );

  function handleAddTransaction(transaction: Transaction) {
    setTransactions([transaction, ...transactions]);
  }

  function handleDeleteTransaction(id: string) {
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== id
    );

    setTransactions(updatedTransactions);
  }

  const filteredTransactions = useMemo(() => {
    return transactions.filter((transaction) => {
      const searchValue = searchText.toLowerCase();

      const matchesSearch =
        transaction.title.toLowerCase().includes(searchValue) ||
        transaction.category.toLowerCase().includes(searchValue);

      const matchesType =
        selectedType === "All" || transaction.type === selectedType;

      return matchesSearch && matchesType;
    });
  }, [transactions, searchText, selectedType]);

  const totalIncome = transactions
    .filter((transaction) => transaction.type === "Income")
    .reduce((total, transaction) => total + transaction.amount, 0);

  const totalExpense = transactions
    .filter((transaction) => transaction.type === "Expense")
    .reduce((total, transaction) => total + transaction.amount, 0);

  const balance = totalIncome - totalExpense;

  return (
    <main className="app">
      <section className="hero">
        <div>
          <p className="eyebrow">Finance Dashboard</p>
          <h1>Expense Tracker</h1>
          <p className="hero-text">
            Track your income and expenses with a clean, simple, and modern
            personal finance dashboard.
          </p>
        </div>

        <div className="hero-balance">
          <p>Current Balance</p>
          <h2>{formatCurrency(balance)}</h2>
        </div>
      </section>

      <section className="stats-grid">
        <StatCard
          title="Balance"
          value={formatCurrency(balance)}
          icon="💰"
          variant="balance"
        />
        <StatCard
          title="Income"
          value={formatCurrency(totalIncome)}
          icon="📈"
          variant="income"
        />
        <StatCard
          title="Expense"
          value={formatCurrency(totalExpense)}
          icon="📉"
          variant="expense"
        />
      </section>
      <BudgetCard
  budget={monthlyBudget}
  totalExpense={totalExpense}
  onBudgetChange={setMonthlyBudget}
/>

      <section className="content-grid">
        <TransactionForm onAddTransaction={handleAddTransaction} />

        <div className="transactions-section">
          <div className="section-header">
            <div>
              <h2>Recent Transactions</h2>
              <p>Search, filter, and manage your transactions</p>
            </div>
          </div>

          <TransactionFilters
            searchText={searchText}
            selectedType={selectedType}
            onSearchChange={setSearchText}
            onTypeChange={setSelectedType}
          />

          {transactions.length === 0 ? (
            <EmptyState message="Start by adding your first transaction." />
          ) : (
            <TransactionList
              transactions={filteredTransactions}
              onDeleteTransaction={handleDeleteTransaction}
            />
          )}
        </div>
      </section>
    </main>
  );
}

export default App;
