'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  alt: string;
  features: string[];
  demoUrl?: string;
}

export default function ProjectCard({ title, description, image, alt, features, demoUrl }: ProjectCardProps) {
  const buttonContent = (
    <button className="mt-4 inline-flex items-center justify-center rounded-full bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-electric hover:text-black">
      View demo
    </button>
  );

  return (
    <motion.article
      whileHover={{ y: -10 }}
      className="glass-card group overflow-hidden rounded-[28px] border border-white/10 bg-[#08101e] p-6 shadow-glow transition"
    >
      <img src={image} alt={alt} className="mb-6 h-48 w-full rounded-[24px] object-cover" />
      <div className="space-y-4">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-electric">Project</p>
          <h3 className="mt-3 text-2xl font-semibold text-white">{title}</h3>
        </div>
        <p className="text-slate-300">{description}</p>
        <ul className="space-y-2 text-sm text-slate-400">
          {features.map((feature) => (
            <li key={feature}>• {feature}</li>
          ))}
        </ul>
        {demoUrl ? (
          <Link href={demoUrl}>
            {buttonContent}
          </Link>
        ) : (
          buttonContent
        )}
      </div>
    </motion.article>
  );
}
