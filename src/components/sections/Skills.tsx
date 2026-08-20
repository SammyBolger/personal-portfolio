import { motion } from 'framer-motion';
import { Section } from '../Section';
import { skills } from '../../data/content';

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="space-y-8">
        {skills.map((group, i) => (
          <motion.div
            key={group.group}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="grid md:grid-cols-[180px_1fr] gap-4 md:gap-8 border-t border-token pt-6"
          >
            <div className="text-xs uppercase tracking-widest text-subtle">{group.group}</div>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-fg">
              {group.items.map((s, idx) => (
                <span key={s} className="text-muted">
                  {s}
                  {idx < group.items.length - 1 && <span className="text-subtle ml-4">·</span>}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
