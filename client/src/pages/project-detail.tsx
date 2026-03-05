import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useRoute } from "wouter";
import { Helmet } from "react-helmet-async";
import { getProject } from "@/data/projects";
import { ArrowLeft, CheckCircle, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

export default function ProjectDetail() {
  const [, params] = useRoute("/work/:id");
  const id = params?.id;
  const project = getProject(Number(id));

  /* CreativeWork / SoftwareApplication schema */
  useEffect(() => {
    if (!project) return;
    const schema = {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: project.title,
      description: project.description,
      creator: {
        "@type": "Organization",
        name: "Bytexis",
        url: "https://bytexis.in",
      },
      genre: project.industry,
      keywords: [...project.services, ...project.techStack].join(", "),
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(schema);
    script.id = `project-schema-${project.id}`;
    if (!document.getElementById(`project-schema-${project.id}`)) {
      document.head.appendChild(script);
    }
    return () => { document.getElementById(`project-schema-${project.id}`)?.remove(); };
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen pt-32 pb-24 max-w-4xl mx-auto px-4 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-muted mb-8">
          <Briefcase className="w-10 h-10 text-muted-foreground" />
        </div>
        <h1 className="text-4xl font-display font-bold mb-4">Project not found</h1>
        <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist or has been removed.</p>
        <Link href="/work">
          <Button className="gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to Work
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{project.title} | {project.industry} Project | Bytexis Portfolio</title>
        <meta name="description" content={`${project.description} Built using ${project.techStack.slice(0, 3).join(', ')}. ${project.results}`} />
        <meta name="keywords" content={`${project.title}, ${project.industry}, ${project.services.join(', ')}, ${project.techStack.join(', ')}`} />
      </Helmet>
      
      <motion.article
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="pb-32"
      >
      {/* Back nav */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
        <Link
          href="/work"
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors gap-1.5"
        >
          <ArrowLeft className="w-4 h-4" /> Back to all projects
        </Link>
      </div>

      {/* Hero header */}
      <header className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {/* Meta */}
        <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-2 mb-6">
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {project.industry}
          </span>
          <span className="text-muted-foreground/40">·</span>
          {project.services.slice(0, 2).map((s) => (
            <span
              key={s}
              className="text-xs text-muted-foreground"
            >
              {s}
            </span>
          ))}
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={fadeUp}
          custom={1}
          className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight"
        >
          {project.title}
        </motion.h1>

        <motion.p
          variants={fadeUp}
          custom={2}
          className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-2xl"
        >
          {project.description}
        </motion.p>

        {/* Tech stack chips */}
        <motion.div variants={fadeUp} custom={3} className="mt-6 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded bg-secondary text-sm"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* Hero Image */}
        <motion.div
          variants={fadeUp}
          custom={4}
          className="mt-12 aspect-video w-full overflow-hidden rounded-xl border border-border bg-muted"
        >
          <img
            src={project.imageUrl}
            alt={`${project.title} - ${project.industry} project showcase | ${project.description}`}
            className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500"
          />
        </motion.div>
      </header>

      {/* Divider */}
      <div className="border-t border-border/60" />

      {/* Case study body */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 grid grid-cols-1 md:grid-cols-12 gap-16">
        {/* Sidebar */}
        <aside className="md:col-span-4 space-y-10">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
              Industry
            </h3>
            <p className="text-sm font-medium">{project.industry}</p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
              Services Provided
            </h3>
            <ul className="space-y-2">
              {project.services.map((s) => (
                <li key={s} className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-3.5 h-3.5 text-foreground mt-0.5 flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="md:col-span-8 space-y-14">
          <section aria-labelledby="problem-heading">
            <h2 id="problem-heading" className="text-2xl font-display font-bold mb-4">
              The Problem
            </h2>
            <p className="text-muted-foreground leading-relaxed text-[1.02rem]">
              {project.problem}
            </p>
          </section>

          <section aria-labelledby="solution-heading">
            <h2 id="solution-heading" className="text-2xl font-display font-bold mb-4">
              The Solution
            </h2>
            <p className="text-muted-foreground leading-relaxed text-[1.02rem]">
              {project.solution}
            </p>
          </section>

          <section
            aria-labelledby="results-heading"
            className="p-7 rounded-2xl bg-card border border-border"
          >
            <h2 id="results-heading" className="text-xl font-display font-bold mb-3">
              Impact &amp; Results
            </h2>
            <p className="text-muted-foreground leading-relaxed text-[1.02rem]">
              {project.results}
            </p>
          </section>

          {/* CTA at bottom of case study */}
          <div className="pt-4 border-t border-border/60">
            <p className="text-muted-foreground mb-4 text-sm">
              Interested in a similar solution for your business?
            </p>
            <Link href="/contact">
              <Button>Start a Project</Button>
            </Link>
          </div>
        </main>
      </div>
    </motion.article>
    </>
  );
}
