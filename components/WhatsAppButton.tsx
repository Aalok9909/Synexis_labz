'use client';

import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsVisible(true), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <a
      href="https://wa.me/919313395625?text=Hello%20Synexis%20Labs%2C%20I%20want%20a%20free%20demo%20for%20AI%20automation."
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-3 rounded-full bg-[#0a1220] px-4 py-3 text-sm font-semibold text-white shadow-glow transition hover:translate-y-[-2px] hover:bg-[#071018]"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={18} className="text-electric" />
      WhatsApp
    </a>
  );
}
