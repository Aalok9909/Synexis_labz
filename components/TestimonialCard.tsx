'use client';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  company: string;
}

export default function TestimonialCard({ name, role, quote, company }: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="glass-card rounded-[28px] border border-white/10 bg-[#08101e] p-6 shadow-glow"
    >
      <p className="text-lg leading-8 text-slate-200">“{quote}”</p>
      <div className="mt-6">
        <p className="font-semibold text-white">{name}</p>
        <p className="text-sm text-slate-400">{role} · {company}</p>
      </div>
    </motion.div>
  );
}
