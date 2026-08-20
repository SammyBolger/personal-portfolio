import { motion } from 'framer-motion';
import { Section } from '../Section';
import { education } from '../../data/content';

export function Education() {
  return (
    <Section id="education" title="Education">
      <div className="space-y-10">
        {education.map((e, i) => (
          <motion.div
            key={e.school}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="border-t border-token pt-8"
          >
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2 gap-1">
              <h3 className="text-xl text-fg font-medium">
                {e.school}{' '}
                <span className="text-muted font-normal">· {e.degree}</span>
              </h3>
              <div className="text-sm text-muted">Graduated {e.graduation}</div>
            </div>
            <div className="text-sm text-muted mb-4">{e.location}</div>
            {e.minors && (
              <div className="text-muted">
                <span className="text-subtle text-xs uppercase tracking-widest mr-2">
                  Minors
                </span>
                {e.minors}
              </div>
            )}
            {e.activities && (
              <div className="text-muted mt-2">
                <span className="text-subtle text-xs uppercase tracking-widest mr-2">
                  Activities &amp; Awards
                </span>
                {e.activities}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
