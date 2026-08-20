import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../BrandIcons';
import { Section } from '../Section';
import { profile } from '../../data/content';

export function Contact() {
  return (
    <Section id="contact" title="Get in touch">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="border-t border-token pt-8"
      >
        <p className="text-muted text-lg max-w-2xl leading-relaxed mb-8">
          Always up for a conversation. Links below.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-sm">
          <a
            href={profile.socials.email}
            className="inline-flex items-center gap-2 border border-token px-4 py-2 rounded-full text-fg hover-accent hover:border-current"
          >
            <Mail size={16} /> Email
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-muted hover-accent"
          >
            <LinkedinIcon size={16} /> LinkedIn
          </a>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-muted hover-accent"
          >
            <GithubIcon size={16} /> GitHub
          </a>
        </div>
      </motion.div>
      <div className="mt-16 text-xs text-subtle font-mono border-t border-token pt-6">
        © {new Date().getFullYear()} Sammy Bolger
      </div>
    </Section>
  );
}
