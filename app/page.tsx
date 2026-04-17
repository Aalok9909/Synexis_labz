'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import EmailCapture from '@/components/EmailCapture';
import ProjectCard from '@/components/ProjectCard';
import TestimonialCard from '@/components/TestimonialCard';
import PricingCard from '@/components/PricingCard';
import FAQItem from '@/components/FAQItem';
import { features, trustLogos, projects, testimonials, pricingPlans, faqs } from '@/lib/siteData';

export default function Home() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Synexis Labs',
    url: 'https://synexislabs.com',
    logo: 'https://synexislabs.com/logo.png',
    description: 'Premium AI automation for gyms USA, WhatsApp automation for salons UK, and affordable web development services USA.',
    sameAs: ['https://www.linkedin.com/company/synexis-labs', 'https://www.facebook.com/synexislabs']
  };

  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="relative overflow-hidden pb-24 pt-16">
        <div className="absolute inset-x-0 top-0 h-[460px] bg-hero-gradient opacity-80" />
        <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 xl:px-0">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-8">
              <div className="inline-flex rounded-full border border-electric/30 bg-white/5 px-4 py-2 text-sm text-electric backdrop-blur-xl">
                🚀 #1 Ranked AI Automation & Web Development · Global Services · Fast Growth
              </div>
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <h1 className="max-w-3xl text-5xl font-semibold leading-tight text-white sm:text-6xl">
                  Scale Your Business with AI Automation That Works 24/7
                </h1>
                <p className="mt-6 max-w-2xl text-lg text-slate-300">
                  Synexis Labs is the #1 global agency for AI automation, web development, and digital transformation. We help businesses in USA, UK, Canada, Dubai, and worldwide automate sales, rank on Google, and scale revenue.
                </p>
              </motion.div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-electric px-8 py-4 text-sm font-semibold text-black transition hover:brightness-110">
                  Start Your Free Audit
                </Link>
                <Link href="#projects" className="inline-flex items-center justify-center rounded-full border border-white/10 px-8 py-4 text-sm text-white transition hover:border-electric">
                  View Case Studies
                </Link>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {trustLogos.map((logo) => (
                  <div key={logo} className="glass-card rounded-3xl border border-white/10 bg-[#06101c] px-4 py-5 text-center text-sm text-slate-300">
                    {logo}
                  </div>
                ))}
              </div>
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.85 }} className="relative">
              <div className="glass-card relative overflow-hidden rounded-[32px] border border-white/10 bg-[#08101e] p-8 shadow-glow">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),transparent_38%)]" />
                <div className="relative space-y-6">
                  <div className="rounded-3xl border border-white/10 bg-[#091520] p-6">
                    <p className="text-sm uppercase tracking-[0.35em] text-electric">Complete Growth Stack</p>
                    <h2 className="mt-4 text-3xl font-semibold text-white">Everything you need to dominate your market</h2>
                    <p className="mt-3 text-slate-300">Website + AI chatbot + booking system + WhatsApp automation + CRM + analytics. All built for explosive growth.</p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-3xl bg-[#05101a] p-5">
                      <p className="text-sm uppercase tracking-[0.35em] text-electric">Average Improvement</p>
                      <p className="mt-3 text-3xl font-semibold text-white">3-5x</p>
                      <p className="mt-2 text-sm text-slate-400">Increase in lead quality and conversion within 90 days.</p>
                    </div>
                    <div className="rounded-3xl bg-[#05101a] p-5">
                      <p className="text-sm uppercase tracking-[0.35em] text-electric">Time Saved</p>
                      <p className="mt-3 text-3xl font-semibold text-white">70%</p>
                      <p className="mt-2 text-sm text-slate-400">Less manual work with intelligent automation systems.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 xl:px-0">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.35em] text-electric">What we solve</p>
            <h2 className="text-4xl font-semibold text-white">The problems we solve for every business worldwide.</h2>
            <p className="text-slate-300">We transform struggling operations into premium systems that attract clients, automate conversions, and scale revenue—regardless of your industry or location.</p>
            <div className="space-y-4">
              <div className="glass-card rounded-[28px] border border-white/10 bg-[#08101e] p-6 shadow-glow">
                <p className="font-semibold text-white">Too many leads going unanswered</p>
                <p className="mt-2 text-slate-300">24/7 AI chatbots and WhatsApp automation capture and qualify every single lead automatically.</p>
              </div>
              <div className="glass-card rounded-[28px] border border-white/10 bg-[#08101e] p-6 shadow-glow">
                <p className="font-semibold text-white">Manual work eating your time</p>
                <p className="mt-2 text-slate-300">Intelligent automation handles bookings, reminders, follow-ups, and confirmations completely on autopilot.</p>
              </div>
              <div className="glass-card rounded-[28px] border border-white/10 bg-[#08101e] p-6 shadow-glow">
                <p className="font-semibold text-white">Competitors ranking above you online</p>
                <p className="mt-2 text-slate-300">SEO-optimized premium websites built to rank #1 and attract high-quality clients from search engines.</p>
              </div>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                whileHover={{ y: -6 }}
                className="glass-card rounded-[28px] border border-white/10 bg-[#08101e] p-6 shadow-glow"
              >
                <p className="text-sm uppercase tracking-[0.35em] text-electric">{feature.title}</p>
                <p className="mt-4 text-slate-300">{feature.description}</p>
                <p className="mt-4 text-sm text-slate-400">{feature.highlight}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 pb-24 xl:px-0">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-electric">Projects</p>
            <h2 className="mt-4 text-4xl font-semibold text-white">Premium demo projects built to convert.</h2>
          </div>
          <Link href="/projects" className="text-sm font-semibold text-electric transition hover:text-white">
            View all projects
          </Link>
        </div>
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 xl:px-0">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-electric">Demo video</p>
            <h2 className="mt-4 text-4xl font-semibold text-white">See the lead generation experience in motion.</h2>
            <p className="mt-4 max-w-xl text-slate-300">Watch how a modern AI automation system converts website visitors into booked appointments and premium clients.</p>
          </div>
          <div className="glass-card overflow-hidden rounded-[32px] border border-white/10 bg-[#08101e] shadow-glow">
            <div className="relative aspect-[16/9] bg-[#0f172a]">
              <img src="/images/video-placeholder.svg" alt="Demo video placeholder showcasing premium AI automation" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 xl:px-0">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="glass-card rounded-[32px] border border-white/10 bg-gradient-to-br from-[#08101e] to-[#05101a] p-12 shadow-glow">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-electric">💬 Live Interactive Demo</p>
              <h2 className="mt-4 text-4xl font-semibold text-white">Try Our AI Chatbot Now</h2>
              <p className="mt-4 text-lg text-slate-300">See exactly how JB Goodwin REALTORS uses Voiceflow AI to capture leads, qualify buyers, and book property showings — all automatically, 24/7.</p>
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 shrink-0">✓</div>
                  <div className="text-slate-300"><strong>45% more qualified leads</strong> — Intelligent conversation flow captures serious buyers</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 shrink-0">✓</div>
                  <div className="text-slate-300"><strong>70% faster response</strong> — Never miss a lead after hours again</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 shrink-0">✓</div>
                  <div className="text-slate-300"><strong>100% automated scheduling</strong> — Showings booked without manual follow-up</div>
                </div>
              </div>
              <Link href="/chatbot-demo" className="mt-8 inline-flex items-center justify-center rounded-full bg-electric px-8 py-4 text-sm font-semibold text-black transition hover:brightness-110">
                Explore Live Demo & Case Study →
              </Link>
            </div>
            <div className="glass-card rounded-[24px] border border-white/10 bg-[#05101a] p-6">
              <p className="text-sm font-semibold text-electric mb-4">Real Results from Real Clients</p>
              <div className="space-y-4">
                <div className="rounded-lg bg-[#08101e] p-4 border border-electric/20">
                  <p className="text-2xl font-bold text-electric">45%</p>
                  <p className="text-xs text-slate-400 mt-1">More qualified leads</p>
                </div>
                <div className="rounded-lg bg-[#08101e] p-4 border border-electric/20">
                  <p className="text-2xl font-bold text-electric">$200K+</p>
                  <p className="text-xs text-slate-400 mt-1">Additional revenue</p>
                </div>
                <div className="rounded-lg bg-[#08101e] p-4 border border-electric/20">
                  <p className="text-2xl font-bold text-electric">3x</p>
                  <p className="text-xs text-slate-400 mt-1">More showings booked</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 xl:px-0">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-electric">Testimonials</p>
          <h2 className="mt-4 text-4xl font-semibold text-white">Trusted by service brands across premium markets.</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 xl:px-0">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-electric">Pricing</p>
          <h2 className="mt-4 text-4xl font-semibold text-white">Affordable monthly plans with free setup.</h2>
        </div>
        <div className="grid gap-6 xl:grid-cols-3">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.title} {...plan} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 xl:px-0">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-electric">FAQs</p>
          <h2 className="mt-4 text-4xl font-semibold text-white">Common questions from gym, salon, and real estate owners.</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} {...faq} />
          ))}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <EmailCapture />
    </main>
  );
}
