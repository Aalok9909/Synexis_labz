import { blogPosts } from '@/lib/siteData';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage(props: any) {
  const params = props.params as { slug: string };
  const post = blogPosts.find((item) => item.slug === params.slug);

  if (!post) {
    return (
      <main className="mx-auto max-w-6xl px-6 py-20 text-white">
        <p>Post not found.</p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-20 text-white xl:px-0">
      <article className="glass-card rounded-[32px] border border-white/10 bg-[#08101e] p-10 shadow-glow">
        <p className="text-sm uppercase tracking-[0.35em] text-electric">{post.date}</p>
        <h1 className="mt-4 text-5xl font-semibold">{post.title}</h1>
        <p className="mt-6 max-w-3xl text-lg text-slate-300">{post.description}</p>
        <div className="mt-12 space-y-8 text-slate-200">
          {post.content.map((paragraph) => (
            <p key={paragraph} className="leading-8">{paragraph}</p>
          ))}
        </div>
      </article>
    </main>
  );
}
