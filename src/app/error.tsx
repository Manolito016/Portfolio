'use client';

import { AlertTriangle } from 'lucide-react';

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html><body>
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
        <div className="rounded-full bg-destructive/10 p-4 mb-4"><AlertTriangle className="h-8 w-8 text-destructive" /></div>
        <h2 className="text-xl font-bold">Something went wrong</h2>
        <p className="text-muted-foreground mt-2 max-w-md">{error.message || 'An unexpected error occurred.'}</p>
        <button onClick={reset} className="mt-4 px-4 py-2 text-sm rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">Try again</button>
      </div>
    </body></html>
  );
}
