import { motion } from 'framer-motion';
import { Section } from '../Section';
import { profile } from '../../data/content';

export function About() {
  return (
    <Section id="about" title="About">
      <div className="grid md:grid-cols-3 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-2 space-y-4 text-muted leading-relaxed"
        >
          {profile.bio.split('\n').map((line, i) => (
            <p key={i}>{line.trim()}</p>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4 text-sm"
        >
          <Row label="Location" value={profile.location} />
          <Row label="Role" value={profile.title} />
          <Row label="Company" value={profile.company} />
        </motion.div>
      </div>
    </Section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-widest text-subtle mb-1">{label}</div>
      <div className="text-fg">{value}</div>
    </div>
  );
}
