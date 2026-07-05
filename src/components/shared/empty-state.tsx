import { Inbox } from 'lucide-react';

/** Empty state component for when there's no data */
export function EmptyState({
  title = 'No data found',
  description = 'There are no items to display at this time.',
  icon: Icon = Inbox,
}: {
  title?: string;
  description?: string;
  icon?: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="rounded-full bg-muted p-4 mb-4">
        <Icon className="h-8 w-8 text-muted-foreground" />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground max-w-sm">
        {description}
      </p>
    </div>
  );
}
