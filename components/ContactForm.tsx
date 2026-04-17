'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';

interface ContactFormProps {
  initialMessage?: string;
}

export default function ContactForm({ initialMessage }: ContactFormProps) {
  const [formState, setFormState] = useState({ name: '', email: '', message: initialMessage ?? '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState)
      });

      if (!response.ok) throw new Error('Network error');
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="glass-card rounded-[32px] border border-white/10 bg-[#08101e] p-10 shadow-glow">
      <form onSubmit={handleSubmit} className="space-y-6">
        <label className="block text-sm font-semibold text-slate-200">
          Name
          <input
            name="name"
            required
            value={formState.name}
            onChange={handleChange}
            className="mt-3 w-full rounded-3xl border border-white/10 bg-[#09131f] px-4 py-4 text-white outline-none transition focus:border-electric"
            placeholder="Your name"
          />
        </label>
        <label className="block text-sm font-semibold text-slate-200">
          Email
          <input
            type="email"
            name="email"
            required
            value={formState.email}
            onChange={handleChange}
            className="mt-3 w-full rounded-3xl border border-white/10 bg-[#09131f] px-4 py-4 text-white outline-none transition focus:border-electric"
            placeholder="Email address"
          />
        </label>
        <label className="block text-sm font-semibold text-slate-200">
          Message
          <textarea
            name="message"
            rows={5}
            required
            value={formState.message}
            onChange={handleChange}
            className="mt-3 w-full rounded-[28px] border border-white/10 bg-[#09131f] px-4 py-4 text-white outline-none transition focus:border-electric"
            placeholder="Tell us about your business"
          />
        </label>
        <button
          type="submit"
          className="w-full rounded-full bg-electric px-6 py-4 text-sm font-semibold text-black transition hover:brightness-110"
        >
          {status === 'sending' ? 'Sending...' : 'Send Request'}
        </button>
        {status === 'success' && <p className="text-sm text-emerald-400">Message received! We will contact you soon.</p>}
        {status === 'error' && <p className="text-sm text-rose-400">Unable to send. Please try again later.</p>}
      </form>
    </div>
  );
}
