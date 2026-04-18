'use client';

import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import Logo from '@/components/Logo';
import { motion } from 'framer-motion';

export default function ContactPageClient() {
  const searchParams = useSearchParams();
  const selectedPlan = searchParams?.get('plan') ?? undefined;
  const initialMessage = selectedPlan ? `I am interested in the ${selectedPlan} plan. Please contact me with pricing and next steps.` : '';

  return (
    <main>
      <Navbar />
      <section className="mx-auto max-w-6xl px-6 py-20 xl:px-0">
        <div className="grid gap-16 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="rounded-3xl bg-[#07101a] p-3 shadow-glow">
                <Logo className="h-10 w-10" />
              </div>
              <p className="text-sm uppercase tracking-[0.35em] text-electric">Contact</p>
            </div>
            <h1 className="text-5xl font-semibold text-white">Ready to launch your AI automation system?</h1>
            <p className="text-lg text-slate-300">Book a free demo, discuss your business goals, or get a custom proposal for your service brand.</p>
            {selectedPlan ? (
              <p className="text-md rounded-3xl border border-electric/20 bg-[#08111d] px-5 py-4 text-slate-300">
                You're interested in the <span className="font-semibold text-white">{selectedPlan}</span> plan. We'll use this information to connect you with the right package.
              </p>
            ) : null}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-[#07101a] p-6 text-slate-300">
                <p className="font-semibold text-white">WhatsApp</p>
                <p className="mt-2">+91 9313395625</p>
              </div>
              <div className="rounded-3xl bg-[#07101a] p-6 text-slate-300">
                <p className="font-semibold text-white">Email</p>
                <p className="mt-2">synexislabz@gmail.com</p>
              </div>
            </div>
          </div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="glass-card rounded-[32px] border border-white/10 bg-[#08101e] p-10 shadow-glow">
            <ContactForm initialMessage={initialMessage} />
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
