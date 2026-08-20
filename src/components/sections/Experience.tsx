import { motion } from 'framer-motion';
import { Section } from '../Section';
import { experience } from '../../data/content';

export function Experience() {
  return (
    <Section id="experience" title="Career">
      <div className="space-y-10">
        {experience.map((e, i) => (
          <motion.div
            key={e.org + e.role}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="border-t border-token pt-8"
          >
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2 gap-1">
              <h3 className="text-xl text-fg font-medium">
                {e.role} <span className="text-muted font-normal">· {e.org}</span>
              </h3>
              <div className="text-sm text-subtle font-mono">{e.period}</div>
            </div>
            <div className="text-sm text-subtle mb-4">{e.location}</div>
            <ul className="space-y-2 text-muted leading-relaxed">
              {e.bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-2.5 w-1 h-1 rounded-full bg-current opacity-40 shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
