'use client';

import { motion } from 'framer-motion';

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <motion.div whileHover={{ y: -2 }} className="glass-card rounded-[28px] border border-white/10 bg-[#07101a] p-6 shadow-glow">
      <h3 className="text-lg font-semibold text-white">{question}</h3>
      <p className="mt-3 text-slate-300">{answer}</p>
    </motion.div>
  );
}
