'use client';

import { useEffect, useState } from 'react';

export default function EmailCapture() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsOpen(true), 6000);
    return () => window.clearTimeout(timer);
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 px-4 py-6 md:px-0">
      <div className="glass-card w-full max-w-xl rounded-[32px] border border-white/10 p-8 shadow-glow">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-electric">Free strategy</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Get the premium AI lead magnet.</h2>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="text-slate-400 transition hover:text-white"
            aria-label="Close popup"
          >
            ×
          </button>
        </div>
        <p className="mt-5 text-slate-300">Join our email list and receive a custom AI growth blueprint for gyms, salons, and clinics.</p>

        {submitted ? (
          <div className="mt-6 rounded-3xl bg-[#0b1729] p-5 text-center text-slate-200">
            Thanks! We will reach out with your growth blueprint shortly.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4 sm:flex-row">
            <input
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Your business email"
              className="min-w-0 flex-1 rounded-3xl border border-white/10 bg-[#0b1220] px-5 py-4 text-white outline-none transition focus:border-electric"
              aria-label="Email address"
            />
            <button type="submit" className="rounded-3xl bg-electric px-6 py-4 text-sm font-semibold text-black transition hover:brightness-110">
              Send me the guide
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
