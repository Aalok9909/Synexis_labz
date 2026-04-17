import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/siteData';

export default function ProjectsPage() {
  return (
    <main>
      <Navbar />
      <section className="mx-auto max-w-6xl px-6 py-20 xl:px-0">
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.35em] text-electric">Projects</p>
          <h1 className="mt-4 text-5xl font-semibold text-white">Demo projects that showcase premium AI automation.</h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-300">Each project is designed to demonstrate how powerful AI and web systems transform local business operations and lead flow.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
