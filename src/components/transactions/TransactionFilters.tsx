import type { TransactionType } from "../../types/transaction";

interface TransactionFiltersProps {
  searchText: string;
  selectedType: "All" | TransactionType;
  onSearchChange: (value: string) => void;
  onTypeChange: (value: "All" | TransactionType) => void;
}

export function TransactionFilters({
  searchText,
  selectedType,
  onSearchChange,
  onTypeChange,
}: TransactionFiltersProps) {
  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Search by title or category..."
        value={searchText}
        onChange={(event) => onSearchChange(event.target.value)}
      />

      <select
        value={selectedType}
        onChange={(event) =>
          onTypeChange(event.target.value as "All" | TransactionType)
        }
      >
        <option value="All">All Transactions</option>
        <option value="Income">Income</option>
        <option value="Expense">Expense</option>
      </select>
    </div>
  );
}