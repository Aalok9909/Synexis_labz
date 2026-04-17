import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <section className="mx-auto max-w-6xl px-6 py-20 xl:px-0">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.35em] text-electric">About</p>
            <h1 className="text-5xl font-semibold text-white">Synexis Labs is the premium AI automation partner for modern service brands.</h1>
            <p className="text-lg text-slate-300">We combine agency-grade design, robust development, and intelligent automation to help gyms, salons, clinics, and real estate professionals win higher-value clients overseas.</p>
          </div>
          <div className="glass-card rounded-[32px] border border-white/10 bg-[#08101e] p-10 shadow-glow">
            <p className="text-sm uppercase tracking-[0.35em] text-electric">Our mission</p>
            <p className="mt-6 text-2xl font-semibold text-white">Create beautiful, fast, and scalable systems that turn visitors into paying clients.</p>
            <p className="mt-4 text-slate-300">We believe small businesses deserve enterprise-level automation, without the complexity. Every solution is built for trust, speed, and measurable ROI.</p>
          </div>
        </div>

        <section className="mt-20 grid gap-8 md:grid-cols-3">
          <div className="glass-card rounded-[28px] border border-white/10 bg-[#08101e] p-8 shadow-glow">
            <p className="text-sm uppercase tracking-[0.35em] text-electric">Credibility</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Built for global clients.</h2>
            <p className="mt-4 text-slate-300">Worked with business owners in UK, USA, Canada, and Dubai who need conversion-focused AI workflows.</p>
          </div>
          <div className="glass-card rounded-[28px] border border-white/10 bg-[#08101e] p-8 shadow-glow">
            <p className="text-sm uppercase tracking-[0.35em] text-electric">Approach</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Strategy-first delivery.</h2>
            <p className="mt-4 text-slate-300">We start with high-converting landing pages, then layer chat, booking, and CRM automation for reliable growth.</p>
          </div>
          <div className="glass-card rounded-[28px] border border-white/10 bg-[#08101e] p-8 shadow-glow">
            <p className="text-sm uppercase tracking-[0.35em] text-electric">Scale</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Ready for growth.</h2>
            <p className="mt-4 text-slate-300">The architecture is optimized for Vercel and can scale from local MongoDB development to hosted production clusters.</p>
          </div>
        </section>
      </section>
      <Footer />
    </main>
  );
}
