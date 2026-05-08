import { useState } from "react";
import type {
  Transaction,
  TransactionCategory,
  TransactionType,
} from "../../types/transaction";

interface TransactionFormProps {
  onAddTransaction: (transaction: Transaction) => void;
}

export function TransactionForm({ onAddTransaction }: TransactionFormProps) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState<TransactionType>("Expense");
  const [category, setCategory] = useState<TransactionCategory>("Food");
  const [note, setNote] = useState("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (!title || !amount) {
      alert("Please enter title and amount");
      return;
    }

    const newTransaction: Transaction = {
      id: crypto.randomUUID(),
      title,
      amount: Number(amount),
      type,
      category,
      note,
      date: new Date().toISOString().split("T")[0],
    };

    onAddTransaction(newTransaction);

    setTitle("");
    setAmount("");
    setType("Expense");
    setCategory("Food");
    setNote("");
  }

  return (
    <form className="transaction-form" onSubmit={handleSubmit}>
      <h2>Add Transaction</h2>

      <input
        type="text"
        placeholder="Transaction title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(event) => setAmount(event.target.value)}
      />

      <div className="form-row">
        <select
          value={type}
          onChange={(event) => setType(event.target.value as TransactionType)}
        >
          <option value="Income">Income</option>
          <option value="Expense">Expense</option>
        </select>

        <select
          value={category}
          onChange={(event) =>
            setCategory(event.target.value as TransactionCategory)
          }
        >
          <option value="Salary">Salary</option>
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Shopping">Shopping</option>
          <option value="Bills">Bills</option>
          <option value="Education">Education</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <textarea
        placeholder="Note"
        value={note}
        onChange={(event) => setNote(event.target.value)}
      />

      <button type="submit">Add Transaction</button>
    </form>
  );
}