import Link from 'next/link';
import { ArrowRight, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#05060d] py-10 text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 xl:px-0 xl:flex-row xl:justify-between">
        <div className="max-w-xl space-y-4">
          <p className="text-2xl font-semibold text-white">Synexis Labs</p>
          <p>Premium AI automation and web development for gyms, salons, clinics, real estate, and small businesses.</p>
          <div className="flex items-center gap-4 text-sm">
            <Phone size={16} />
            <span>+91 9313395625</span>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <Mail size={16} />
            <span>contact@synexislabs.com</span>
          </div>
        </div>
        <div className="grid gap-4 text-sm sm:grid-cols-2">
          <div>
            <p className="mb-3 font-semibold text-white">Quick links</p>
            <ul className="space-y-2">
              <li><Link href="/services" className="hover:text-white">Services</Link></li>
              <li><Link href="/projects" className="hover:text-white">Projects</Link></li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            </ul>
          </div>
          <div>
            <p className="mb-3 font-semibold text-white">Ready to grow?</p>
            <p className="mb-4">Book your free demo and start converting premium clients today.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 text-electric hover:text-white">
              Contact us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
