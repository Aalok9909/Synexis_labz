'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  points: string[];
}

export default function PricingCard({ title, price, description, points }: PricingCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="glass-card rounded-[32px] border border-white/10 bg-[#09111b] p-7 shadow-glow"
    >
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.35em] text-electric">{title}</p>
        <p className="text-4xl font-semibold text-white">{price}</p>
        <p className="text-slate-300">{description}</p>
      </div>
      <ul className="mt-6 space-y-3 text-sm text-slate-300">
        {points.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
      <Link
        href={`/contact?plan=${encodeURIComponent(title)}`}
        className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-electric px-5 py-4 text-sm font-semibold text-black transition hover:brightness-110"
      >
        Select plan
      </Link>
    </motion.div>
  );
}
