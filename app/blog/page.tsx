import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogCard from '@/components/BlogCard';
import { blogPosts } from '@/lib/siteData';

export default function BlogPage() {
  return (
    <main>
      <Navbar />
      <section className="mx-auto max-w-6xl px-6 py-20 xl:px-0">
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.35em] text-electric">Blog</p>
          <h1 className="mt-4 text-5xl font-semibold text-white">Insights that help business owners scale with AI automation.</h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-300">Read our latest SEO-optimized articles for gyms, salons, real estate agents, and small businesses targeting AI automation for gyms USA, WhatsApp automation for salons UK, and affordable web development services USA.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
        <div className="mt-12 text-center text-slate-400">
          <p>Want a custom article for your niche? <Link href="/contact" className="text-electric underline">Contact Synexis Labs</Link>.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
