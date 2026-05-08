import type { Transaction } from "../../types/transaction";
import { formatCurrency, formatDate } from "../../utils/formatters";

interface TransactionCardProps {
  transaction: Transaction;
  onDelete: (id: string) => void;
}

export function TransactionCard({
  transaction,
  onDelete,
}: TransactionCardProps) {
  return (
    <article className="transaction-card">
      <div className="transaction-info">
        <div className={`category-icon ${transaction.type.toLowerCase()}`}>
          {transaction.type === "Income" ? "↗" : "↘"}
        </div>

        <div>
          <h3>{transaction.title}</h3>
          <p>
            {transaction.category} • {formatDate(transaction.date)}
          </p>
        </div>
      </div>

      <div className="transaction-right">
        <strong className={transaction.type.toLowerCase()}>
          {transaction.type === "Income" ? "+" : "-"}
          {formatCurrency(transaction.amount)}
        </strong>

        <button onClick={() => onDelete(transaction.id)}>Delete</button>
      </div>

      {transaction.note && <p className="transaction-note">{transaction.note}</p>}
    </article>
  );
}