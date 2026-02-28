import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { getProjects } from "@/data/projects";
import { ArrowRight } from "lucide-react";

const projects = getProjects();

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: i * 0.08 },
  }),
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
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
    <div className="min-h-screen">
      {/* Header */}
      <section className="pt-16 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-3xl"
        >
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight"
          >
            Custom Software &amp; Web Development Projects
          </motion.h1>
          <motion.p
            variants={fadeUp}
            custom={1}
            className="mt-6 text-lg text-muted-foreground leading-relaxed"
          >
            Explore our portfolio of custom software development, web application
            development, and scalable SaaS platforms built for startups and growing
            businesses in India and globally.
          </motion.p>
        </motion.div>
      </section>

      {/* Project grid */}
      <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              variants={fadeUp}
              custom={i}
              className="group"
            >
              <Link href={`/work/${project.id}`}>
                <article
                  className="
                    h-full flex flex-col rounded-2xl
                    bg-card border border-border
                    hover:border-foreground/20
                    hover:-translate-y-1
                    hover:shadow-lg hover:shadow-black/10
                    transition-all duration-300 cursor-pointer
                    overflow-hidden
                  "
                >
                  {/* Image Container */}
                  <div className="aspect-video w-full overflow-hidden border-b border-border bg-muted">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-8 flex flex-col flex-1">
                    {/* Meta row */}
                    <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                        {project.industry}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full border border-border text-[10px] uppercase font-bold text-muted-foreground">
                        {project.services[0]}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl font-display font-bold mb-3 group-hover:text-foreground/80 transition-colors">
                      {project.title}
                    </h2>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-6">
                      {project.description}
                    </p>

                    {/* Tech chips */}
                    <div className="mt-auto pt-6 border-t border-border/50 flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground text-[10px] font-bold uppercase tracking-wider"
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

      {/* Bottom SEO section */}
      <section className="py-20 bg-card border-t border-border/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-5">
              Custom Software Development Case Studies
            </h2>
            <p className="text-muted-foreground leading-relaxed text-[1.02rem]">
              Bytexis delivers scalable web and mobile solutions across industries
              including fintech, healthcare, SaaS, and e-commerce. Our development
              approach focuses on performance, maintainability, and long-term
              scalability — helping startups and businesses in India and globally
              ship products they're proud of.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
