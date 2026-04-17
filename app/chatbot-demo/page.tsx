'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import VideoModal from '@/components/VideoModal';

export default function ChatbotDemoPage() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pb-20 pt-16">
        <div className="absolute inset-x-0 top-0 h-[460px] bg-hero-gradient opacity-80" />
        <div className="mx-auto max-w-7xl px-6 xl:px-0">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-8">
            <div className="inline-flex rounded-full border border-electric/30 bg-white/5 px-4 py-2 text-sm text-electric backdrop-blur-xl">
              💬 Live AI Chatbot Demo
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold leading-tight text-white sm:text-6xl">
              Meet the AI Chatbot Converting Leads for Top Real Estate Agents
            </h1>
            <p className="max-w-3xl text-lg text-slate-300">
              This is a live Voiceflow chatbot powering JB Goodwin REALTORS. Try it now—watch how it qualifies leads, answers property questions, and books showing appointments instantly, 24/7.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-7xl px-6 pb-24 xl:px-0">
        <div className="grid gap-16 lg:Grid-cols-[1fr_1fr]">
          {/* Voiceflow Chatbot */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="glass-card rounded-[32px] border border-white/10 bg-[#08101e] p-8 shadow-glow h-fit">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-white">Try the Live Chatbot</h2>
              <p className="mt-2 text-slate-300">Start a conversation. Watch it qualify leads in real-time.</p>
            </div>
            
            {/* Voiceflow Embed */}
            <div className="rounded-[24px] overflow-hidden border border-white/10 bg-[#05101a]">
              <iframe
                src="https://creator.voiceflow.com/share/69e0737c86ebfd256ac854d1/development"
                style={{
                  width: '100%',
                  height: '650px',
                  border: 'none',
                  borderRadius: '0',
                }}
              />
            </div>
            
            <div className="mt-6 p-4 rounded-xl bg-electric/10 border border-electric/30">
              <p className="text-sm text-slate-200">
                <span className="font-semibold text-electric">✓ AI-Powered Lead Qualification</span><br/>
                This chatbot asks qualifying questions, captures contact info, and books appointments automatically without manual follow-up.
              </p>
            </div>
          </motion.div>

          {/* Case Study & Video */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="space-y-8">
            {/* Case Study Copy */}
            <div className="glass-card rounded-[32px] border border-white/10 bg-[#08101e] p-8 shadow-glow">
              <p className="text-sm uppercase tracking-[0.35em] text-electric">Case Study</p>
              <h2 className="mt-4 text-3xl font-semibold text-white">JB Goodwin REALTORS</h2>
              <p className="mt-4 text-slate-300">Real estate leaders in competitive markets needed a way to capture and qualify hot leads 24/7, without manual work.</p>
              
              <div className="mt-6 space-y-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-sm font-semibold text-electric">Challenge</p>
                  <p className="mt-2 text-slate-300">Lost leads after hours. Competitors were closing deals faster.</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-sm font-semibold text-electric">Solution</p>
                  <p className="mt-2 text-slate-300">Deployed Voiceflow AI chatbot with automated showing scheduling, property inquiries, and lead qualification.</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-sm font-semibold text-electric">Results</p>
                  <p className="mt-2 text-slate-300">
                    <strong>✓ 45% more qualified leads</strong><br/>
                    <strong>✓ 70% faster response time</strong><br/>
                    <strong>✓ 3x more showings booked</strong><br/>
                    <strong>✓ $200K+ in additional revenue</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Demo Video */}
            <div className="glass-card rounded-[32px] border border-white/10 bg-[#08101e] p-8 shadow-glow">
              <p className="text-sm uppercase tracking-[0.35em] text-electric">Watch the Results</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">See the AI Chatbot in Action</h3>
              <p className="mt-2 text-slate-300">Full walkthrough showing lead capture, qualification, and booking automation.</p>
              
              <div className="mt-6 rounded-[24px] overflow-hidden border border-white/10" style={{ aspectRatio: '16/9' }}>
                <VideoModal videoUrl="https://cap.link/4xy4f26rkkmvgtd" />
              </div>

              <div className="mt-4 text-sm text-slate-300">
                💡 <strong>Key Features Shown:</strong><br/>
                • Instant lead capture on website<br/>
                • Natural conversation flow<br/>
                • Real-time scheduling integration<br/>
                • Automatic CRM sync
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust & Features Section */}
      <section className="mx-auto max-w-7xl px-6 pb-24 xl:px-0">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="glass-card rounded-[24px] border border-white/10 bg-[#08101e] p-6 shadow-glow text-center">
            <p className="text-4xl font-bold text-electric">45%</p>
            <p className="mt-2 text-sm text-slate-300">More qualified leads captured</p>
          </div>
          <div className="glass-card rounded-[24px] border border-white/10 bg-[#08101e] p-6 shadow-glow text-center">
            <p className="text-4xl font-bold text-electric">24/7</p>
            <p className="mt-2 text-sm text-slate-300">Lead qualification without staff</p>
          </div>
          <div className="glass-card rounded-[24px] border border-white/10 bg-[#08101e] p-6 shadow-glow text-center">
            <p className="text-4xl font-bold text-electric">70%</p>
            <p className="mt-2 text-sm text-slate-300">Faster response time</p>
          </div>
          <div className="glass-card rounded-[24px] border border-white/10 bg-[#08101e] p-6 shadow-glow text-center">
            <p className="text-4xl font-bold text-electric">$200K+</p>
            <p className="mt-2 text-sm text-slate-300">Extra revenue generated</p>
          </div>
        </div>
      </section>

      {/* Why This Chatbot Works */}
      <section className="mx-auto max-w-7xl px-6 pb-24 xl:px-0">
        <h2 className="text-4xl font-semibold text-white mb-12">Why This AI Chatbot Converts So Well</h2>
        
        <div className="grid gap-8 lg:grid-cols-3">
          <motion.div whileHover={{ y: -6 }} className="glass-card rounded-[24px] border border-white/10 bg-[#08101e] p-6 shadow-glow">
            <div className="text-3xl mb-4">🤖</div>
            <h3 className="text-xl font-semibold text-white">Intelligent Qualification</h3>
            <p className="mt-2 text-slate-300">Asks the right questions to identify serious buyers vs time-wasters in seconds.</p>
          </motion.div>

          <motion.div whileHover={{ y: -6 }} className="glass-card rounded-[24px] border border-white/10 bg-[#08101e] p-6 shadow-glow">
            <div className="text-3xl mb-4">📅</div>
            <h3 className="text-xl font-semibold text-white">Automatic Scheduling</h3>
            <p className="mt-2 text-slate-300">Integrates with calendars to book showings in real-time without back-and-forth emails.</p>
          </motion.div>

          <motion.div whileHover={{ y: -6 }} className="glass-card rounded-[24px] border border-white/10 bg-[#08101e] p-6 shadow-glow">
            <div className="text-3xl mb-4">🔄</div>
            <h3 className="text-xl font-semibold text-white">CRM Integration</h3>
            <p className="mt-2 text-slate-300">All conversations and data automatically sync to your CRM for seamless follow-up.</p>
          </motion.div>

          <motion.div whileHover={{ y: -6 }} className="glass-card rounded-[24px] border border-white/10 bg-[#08101e] p-6 shadow-glow">
            <div className="text-3xl mb-4">💬</div>
            <h3 className="text-xl font-semibold text-white">Natural Conversations</h3>
            <p className="mt-2 text-slate-300">Feels like texting with a human—builds trust and keeps leads engaged.</p>
          </motion.div>

          <motion.div whileHover={{ y: -6 }} className="glass-card rounded-[24px] border border-white/10 bg-[#08101e] p-6 shadow-glow">
            <div className="text-3xl mb-4">🕐</div>
            <h3 className="text-xl font-semibold text-white">24/7 Availability</h3>
            <p className="mt-2 text-slate-300">Never miss a lead. Capture inquiries around the clock, even after hours.</p>
          </motion.div>

          <motion.div whileHover={{ y: -6 }} className="glass-card rounded-[24px] border border-white/10 bg-[#08101e] p-6 shadow-glow">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-xl font-semibold text-white">Full Analytics</h3>
            <p className="mt-2 text-slate-300">Track conversation flow, lead sources, conversion rates, and optimization opportunities.</p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-6 pb-24 xl:px-0">
        <div className="glass-card rounded-[32px] border border-white/10 bg-[#08101e] p-12 shadow-glow text-center">
          <h2 className="text-4xl font-semibold text-white mb-6">Ready to Deploy Your Own AI Chatbot?</h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-300 mb-8">
            Get the same results as JB Goodwin REALTORS. Custom-trained for your business, your industry, your leads. 
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-electric px-8 py-4 text-sm font-semibold text-black transition hover:brightness-110">
              Book a Free Demo
            </Link>
            <Link href="/services" className="inline-flex items-center justify-center rounded-full border border-white/10 px-8 py-4 text-sm text-white transition hover:border-electric">
              Learn More Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
