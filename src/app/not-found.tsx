'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-8xl font-bold text-primary/20">404</h1>
        <h2 className="text-2xl font-bold mt-4">Page Not Found</h2>
        <p className="text-muted-foreground mt-2 max-w-md">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex items-center justify-center gap-3 mt-6">
          <Link href="/" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">
            <Home className="h-4 w-4" />Home
          </Link>
          <button onClick={() => window.history.back()} className="inline-flex items-center gap-2 px-4 py-2 rounded-md border text-sm font-medium hover:bg-accent transition-colors">
            <ArrowLeft className="h-4 w-4" />Go Back
          </button>
        </div>
      </motion.div>
    </div>
  );
}
