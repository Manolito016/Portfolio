'use client';

import { motion } from 'framer-motion';

/** Animated section heading with consistent styling */
export function SectionHeading({
  title,
  description,
  align = 'left',
}: {
  title: string;
  description?: string;
  align?: 'left' | 'center';
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className={`mb-8 ${align === 'center' ? 'text-center' : ''}`}
    >
      <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
      {description && (
        <p className="mt-2 text-muted-foreground text-lg">{description}</p>
      )}
    </motion.div>
  );
}
