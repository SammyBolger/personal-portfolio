import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GithubIcon, LinkedinIcon } from '../BrandIcons';
import { profile } from '../../data/content';
import headshot from '../../assets/headshot.svg';

const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center px-6 py-16">
      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[14rem_minmax(0,1fr)] gap-10 lg:gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as const }}
          className="flex justify-center lg:justify-end lg:border-r border-token lg:pr-14"
        >
          <img
            src={headshot}
            alt={profile.name}
            className="w-32 h-32 lg:w-40 lg:h-40 rounded-full object-cover"
          />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          <motion.h1
            variants={item}
            className="font-mono font-bold text-3xl tracking-tight text-fg"
          >
            {profile.name}
          </motion.h1>

          <motion.div
            variants={item}
            className="mt-1 font-mono text-subtle text-sm"
          >
            {profile.title} · {profile.company}
          </motion.div>

          <motion.p
            variants={item}
            className="mt-5 max-w-xl text-base text-muted leading-7"
          >
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex items-center gap-6">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-muted hover-accent"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-muted hover-accent"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={profile.socials.email}
              aria-label="Email"
              className="text-muted hover-accent"
            >
              <Mail size={18} />
            </a>
          </motion.div>

          <motion.div variants={item}>
            <Link
              to="/projects"
              className="mt-10 inline-flex items-center gap-2 rounded-md px-4 py-2.5 font-medium font-mono text-muted text-sm transition-colors hover:bg-card hover:text-fg"
            >
              Explore work <ArrowRight size={14} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
