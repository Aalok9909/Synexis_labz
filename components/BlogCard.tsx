import Link from 'next/link';

interface BlogCardProps {
  slug: string;
  title: string;
  description: string;
  date: string;
}

export default function BlogCard({ slug, title, description, date }: BlogCardProps) {
  return (
    <article className="glass-card rounded-[28px] border border-white/10 bg-[#08101e] p-6 shadow-glow transition hover:-translate-y-2">
      <p className="text-sm uppercase tracking-[0.35em] text-electric">{date}</p>
      <h3 className="mt-4 text-2xl font-semibold text-white">{title}</h3>
      <p className="mt-4 text-slate-300">{description}</p>
      <Link href={`/blog/${slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-electric">
        Read more →
      </Link>
    </article>
  );
}
