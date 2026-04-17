'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { features } from '@/lib/siteData';

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      <section className="mx-auto max-w-6xl px-6 py-20 xl:px-0">
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.35em] text-electric">Services</p>
          <h1 className="mt-4 text-5xl font-semibold text-white">Services Designed for High-Converting Business Growth.</h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-300">
            We build AI-powered automation, SEO-focused websites, chat funnels, booking systems, and CRM workflows for businesses that need premium digital transformation.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {features.map((feature) => (
            <motion.div key={feature.title} whileHover={{ y: -6 }} className="glass-card rounded-[32px] border border-white/10 bg-[#08101e] p-8 shadow-glow">
              <p className="text-sm uppercase tracking-[0.35em] text-electric">{feature.title}</p>
              <h2 className="mt-4 text-3xl font-semibold text-white">{feature.title}</h2>
              <p className="mt-4 text-slate-300">{feature.description}</p>
              <p className="mt-4 text-slate-400">{feature.highlight}</p>
            </motion.div>
          ))}
        </div>

        <section className="mt-20 grid gap-10 lg:grid-cols-2">
          <div className="glass-card rounded-[32px] border border-white/10 bg-[#08101e] p-8 shadow-glow">
            <p className="text-sm uppercase tracking-[0.35em] text-electric">Customized development</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Custom websites built to rank and convert.</h2>
            <p className="mt-4 text-slate-300">Landing pages, portfolio systems, and SEO content structures built for USA, UK, Canada, and Dubai small-business keywords.</p>
          </div>
          <div className="glass-card rounded-[32px] border border-white/10 bg-[#08101e] p-8 shadow-glow">
            <p className="text-sm uppercase tracking-[0.35em] text-electric">Automation consulting</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">End-to-end AI automation project delivery.</h2>
            <p className="mt-4 text-slate-300">Strategy, setup, implementation, and ongoing optimization for better lead quality and revenue growth.</p>
          </div>
        </section>
      </section>
      <Footer />
    </main>
  );
}
