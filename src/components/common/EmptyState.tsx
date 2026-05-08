interface EmptyStateProps {
  message: string;
}

export function EmptyState({ message }: EmptyStateProps) {
  return (
    <div className="empty-state">
      <h3>No transactions found</h3>
      <p>{message}</p>
    </div>
  );
}