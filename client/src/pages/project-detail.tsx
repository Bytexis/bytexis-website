import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useRoute } from "wouter";
import { getProject } from "@/data/projects";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: i * 0.1 },
  }),
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
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
      <div className="min-h-screen pt-24 pb-24 max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-display font-bold">Project not found</h1>
        <Link href="/work">
          <Button className="mt-8 gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to Work
          </Button>
        </Link>
      </div>
    );
  }

  return (
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
      <header className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
        {/* Meta */}
        <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3 mb-6">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            {project.industry}
          </span>
          <span className="text-border">·</span>
          {project.services.slice(0, 2).map((s) => (
            <span
              key={s}
              className="px-2.5 py-0.5 rounded-full border border-border text-xs text-muted-foreground"
            >
              {s}
            </span>
          ))}
        </motion.div>

        {/* One H1 with keyword */}
        <motion.h1
          variants={fadeUp}
          custom={1}
          className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight leading-[1.08]"
        >
          {project.title}
        </motion.h1>

        <motion.p
          variants={fadeUp}
          custom={2}
          className="mt-5 text-xl text-muted-foreground font-light leading-relaxed max-w-2xl"
        >
          {project.description}
        </motion.p>

        {/* Tech stack chips */}
        <motion.div variants={fadeUp} custom={3} className="mt-7 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* Hero Image */}
        <motion.div
          variants={fadeUp}
          custom={4}
          className="mt-16 aspect-video w-full overflow-hidden rounded-[2.5rem] border border-border/50 bg-muted shadow-2xl"
        >
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
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
  );
}
