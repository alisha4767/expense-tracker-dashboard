interface StatCardProps {
  title: string;
  value: string;
  icon: string;
  variant?: "balance" | "income" | "expense";
}

export function StatCard({
  title,
  value,
  icon,
  variant = "balance",
}: StatCardProps) {
  return (
    <div className={`stat-card ${variant}`}>
      <div>
        <p>{title}</p>
        <h2>{value}</h2>
      </div>

      <span>{icon}</span>
    </div>
  );
}