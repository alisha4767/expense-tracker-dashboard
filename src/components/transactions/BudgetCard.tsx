import { formatCurrency } from "../../utils/formatters";

interface BudgetCardProps {
  budget: number;
  totalExpense: number;
  onBudgetChange: (budget: number) => void;
}

export function BudgetCard({
  budget,
  totalExpense,
  onBudgetChange,
}: BudgetCardProps) {
  const remainingBudget = budget - totalExpense;

  const usedPercentage =
    budget > 0 ? Math.min((totalExpense / budget) * 100, 100) : 0;

  const isOverBudget = budget > 0 && totalExpense > budget;

  return (
    <section className="budget-card">
      <div className="budget-header">
        <div>
          <p className="eyebrow-dark">Monthly Budget</p>
          <h2>{formatCurrency(budget)}</h2>
        </div>

        <input
          type="number"
          min="0"
          placeholder="Set budget"
          value={budget === 0 ? "" : budget}
          onChange={(event) => onBudgetChange(Number(event.target.value))}
        />
      </div>

      <div className="budget-progress">
        <div
          className={`budget-progress-fill ${isOverBudget ? "danger" : ""}`}
          style={{ width: `${usedPercentage}%` }}
        ></div>
      </div>

      <div className="budget-details">
        <div>
          <span>Spent</span>
          <strong>{formatCurrency(totalExpense)}</strong>
        </div>

        <div>
          <span>{isOverBudget ? "Over Budget" : "Remaining"}</span>
          <strong className={isOverBudget ? "danger-text" : ""}>
            {formatCurrency(Math.abs(remainingBudget))}
          </strong>
        </div>
      </div>

      {budget === 0 && (
        <p className="budget-message">
          Set your monthly budget to track spending.
        </p>
      )}

      {isOverBudget && (
        <p className="budget-warning">
          You have crossed your monthly budget limit.
        </p>
      )}
    </section>
  );
}