import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { cn } from '../lib/utils';

type Props = {
  id: string;
  title: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, title, children, className }: Props) {
  return (
    <section id={id} className={cn('py-20 px-6', className)}>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="font-serif text-3xl md:text-4xl mb-10 tracking-tight text-fg"
        >
          {title}
        </motion.h2>
        {children}
      </div>
    </section>
  );
}
