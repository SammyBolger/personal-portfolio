import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Section } from '../Section';
import { projects } from '../../data/content';

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="space-y-10">
        {projects.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="border-t border-token pt-8"
          >
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-2">
              <h3 className="text-2xl font-serif text-fg tracking-tight">{p.name}</h3>
              <div className="text-sm text-subtle">{p.role}</div>
            </div>
            <p className="text-muted mb-4 leading-relaxed">{p.summary}</p>
            <ul className="space-y-2 mb-5 text-muted leading-relaxed">
              {p.bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-2.5 w-1 h-1 rounded-full bg-current opacity-40 shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <div className="text-xs text-subtle font-mono">
                {p.stack.join(' · ')}
              </div>
              <div className="flex items-center gap-4 md:ml-auto">
                {p.status && (
                  <span className="text-xs text-accent">{p.status}</span>
                )}
                {p.links?.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-fg hover-accent inline-flex items-center gap-1"
                  >
                    {l.label} <ArrowUpRight size={14} />
                  </a>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-12 pt-6 border-t border-token text-sm text-muted"
      >
        There&apos;s plenty more on{' '}
        <a
          href="https://github.com/SammyBolger"
          target="_blank"
          rel="noreferrer"
          className="text-fg hover-accent inline-flex items-center gap-1"
        >
          my GitHub <ArrowUpRight size={14} />
        </a>
        .
      </motion.div>
    </Section>
  );
}
