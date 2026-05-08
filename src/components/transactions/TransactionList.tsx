import { EmptyState } from "../common/EmptyState";
import type { Transaction } from "../../types/transaction";
import { TransactionCard } from "./TransactionCard";

interface TransactionListProps {
  transactions: Transaction[];
  onDeleteTransaction: (id: string) => void;
}

export function TransactionList({
  transactions,
  onDeleteTransaction,
}: TransactionListProps) {
  if (transactions.length === 0) {
    return (
      <EmptyState message="Try adding a transaction or changing your filters." />
    );
  }

  return (
    <div className="transaction-list">
      {transactions.map((transaction) => (
        <TransactionCard
          key={transaction.id}
          transaction={transaction}
          onDelete={onDeleteTransaction}
        />
      ))}
    </div>
  );
}