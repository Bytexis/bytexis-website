import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import { getProjects } from "@/data/projects";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = getProjects();

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94], delay: i * 0.06 },
  }),
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

/* ItemList schema for SEO */
const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Custom Software & Web Development Projects by Bytexis",
  description:
    "Portfolio of custom software development, web application development, and SaaS platforms built by Bytexis for startups and businesses.",
  numberOfItems: projects.length,
  itemListElement: projects.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: p.title,
    description: p.description,
  })),
};

export default function Work() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(itemListSchema);
    script.id = "work-schema";
    if (!document.getElementById("work-schema")) document.head.appendChild(script);
    return () => { document.getElementById("work-schema")?.remove(); };
  }, []);

  return (
    <>
      <Helmet>
        <title>Our Work | Web & Software Development Portfolio | Bytexis</title>
        <meta name="description" content="Explore our portfolio of custom software projects, web applications, and SaaS platforms. See how Bytexis helps businesses scale with technology." />
        <meta name="keywords" content="software portfolio, web development projects, SaaS platforms, React applications, custom software examples" />
      </Helmet>
      
      <div className="min-h-screen py-24">
      {/* Header */}
      <section className="pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.p
              variants={fadeUp}
              className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4"
            >
              Our Work
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl font-display font-extrabold tracking-tight mb-6"
            >
              Projects that deliver results
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              From business websites to complex software systems - explore our 
              portfolio of custom software development, web applications, and 
              digital products built for real businesses.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Project grid - 2 columns */}
      <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              variants={fadeUp}
              custom={i}
            >
              <Link href={`/work/${project.id}`}>
                <article
                  className="group h-full rounded-xl bg-card border border-border hover:border-foreground/20 transition-colors cursor-pointer overflow-hidden"
                >
                  {/* Image */}
                  <div className="aspect-[16/10] overflow-hidden bg-muted">
                    <img
                      src={project.imageUrl}
                      alt={`${project.title} - ${project.industry} project by Bytexis | ${project.services.join(', ')}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        {project.industry}
                      </span>
                      <span className="text-muted-foreground/40">·</span>
                      <span className="text-xs text-muted-foreground">
                        {project.services[0]}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-display font-bold mb-3">
                      {project.title}
                    </h2>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded bg-secondary text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Simple CTA */}
      <section className="py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-display font-bold mb-4">
            Have a project in mind?
          </h2>
          <p className="text-muted-foreground mb-6">
            Let's discuss how we can help bring your vision to life.
          </p>
          <Link href="/contact">
            <Button className="gap-2">
              Start a Conversation
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
    </>
  );
}
