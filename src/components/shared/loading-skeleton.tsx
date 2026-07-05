/** Generic loading skeleton component */
export function LoadingSkeleton({
  lines = 3,
  className,
}: {
  lines?: number;
  className?: string;
}) {
  return (
    <div className={`space-y-3 ${className ?? ''}`} role="status" aria-label="Loading">
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className="h-4 rounded-md bg-muted animate-pulse"
          style={{ width: `${85 - i * 15}%` }}
        />
      ))}
      <span className="sr-only">Loading...</span>
    </div>
  );
}

/** Card loading skeleton */
export function CardSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={`rounded-lg border bg-card p-6 space-y-3 ${className ?? ''}`}
      role="status"
      aria-label="Loading"
    >
      <div className="h-4 w-2/3 rounded-md bg-muted animate-pulse" />
      <div className="h-3 w-full rounded-md bg-muted animate-pulse" />
      <div className="h-3 w-4/5 rounded-md bg-muted animate-pulse" />
      <div className="flex gap-2 pt-2">
        <div className="h-6 w-16 rounded-full bg-muted animate-pulse" />
        <div className="h-6 w-16 rounded-full bg-muted animate-pulse" />
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}

/** Grid of card skeletons */
export function CardGridSkeleton({
  count = 6,
  className,
}: {
  count?: number;
  className?: string;
}) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ${className ?? ''}`}>
      {Array.from({ length: count }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
}
