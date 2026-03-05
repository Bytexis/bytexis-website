import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  Globe,
  Smartphone,
  LayoutDashboard,
  Code2,
  CheckCircle2,
  Zap,
  Shield,
  Users,
} from "lucide-react";
import { getProjects } from "@/data/projects";
import { useRef } from "react";

/* ─── Animation variants ──────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94], delay: i * 0.08 },
  }),
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } },
};

/* ─── Data ───────────────────────────────────────────────────── */
const services = [
  {
    icon: Globe,
    title: "Web Applications",
    desc: "High-performance web apps built with React, Next.js, and modern cloud infrastructure. Fast, scalable, production-ready.",
  },
  {
    icon: Code2,
    title: "Custom Software",
    desc: "Tailored solutions that fit your workflows perfectly. Integrated with your existing systems, built to evolve with your business.",
  },
  {
    icon: LayoutDashboard,
    title: "SaaS Products",
    desc: "From idea to live SaaS - we handle architecture, auth, billing, and multi-tenancy. You focus on growth.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "Cross-platform React Native apps. One codebase, iOS and Android, production quality without the bloated cost.",
  },
];

const differentiators = [
  {
    icon: Zap,
    title: "Performance-First",
    desc: "Every app ships with performance baselines built in. We measure, optimize, and deliver fast experiences.",
  },
  {
    icon: Shield,
    title: "Scalable Architecture",
    desc: "Designed to grow. Decisions made today won't force expensive rewrites at 100× traffic.",
  },
  {
    icon: Code2,
    title: "Clean Code",
    desc: "Strong typing, clear conventions, documented APIs. Your team can take over without us.",
  },
  {
    icon: Users,
    title: "Transparent Process",
    desc: "Shared project board. Regular updates. No surprises. You always know where things stand.",
  },
];

const processSteps = [
  { n: "01", title: "Discovery", desc: "Understand goals and constraints before writing code." },
  { n: "02", title: "Design", desc: "High-fidelity prototypes grounded in real user flows." },
  { n: "03", title: "Develop", desc: "Two-week sprints with live staging from day one." },
  { n: "04", title: "Deploy", desc: "Zero-downtime deployment with 30 days support." },
];

const featuredProjects = getProjects().slice(0, 3);

/* ─── Component ─────────────────────────────────────────────── */
export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <>
      <Helmet>
        <title>Bytexis | Web & Software Development Company in Rajkot</title>
        <meta name="description" content="Custom software development company in Rajkot, Gujarat. We build scalable web applications, SaaS products, and mobile-first platforms for startups and businesses." />
        <meta name="keywords" content="software development company India, web development Rajkot, custom software solutions, SaaS development, React development, startup tech partner" />
      </Helmet>
      
      <div className="flex flex-col">

      {/* ── 1. HERO ─────────────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-[85vh] flex items-center pt-20">
        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-4xl"
          >
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-foreground"></span>
              </span>
              <span className="text-sm text-muted-foreground">
                Software Development Studio · Rajkot, India
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              variants={fadeUp}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold leading-[0.95] tracking-[-0.03em]"
            >
              We build software{" "}
              <span className="text-muted-foreground">that scales</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={1}
              className="mt-8 text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl"
            >
              Bytexis helps startups and growing businesses turn ideas into 
              production-ready web applications, SaaS platforms, and custom software.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={fadeUp}
              custom={2}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact">
                <Button size="lg" className="h-14 px-8 text-base gap-2">
                  Start Your Project
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/work">
                <Button size="lg" variant="outline" className="h-14 px-8 text-base">
                  View Our Work
                </Button>
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              variants={fadeUp}
              custom={3}
              className="mt-16 flex flex-wrap gap-8 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>No lock-in contracts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Transparent pricing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Full code ownership</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ── 2. SERVICES ─────────────────────────────────────── */}
      <section className="py-28" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
          >
            {/* Section header */}
            <div className="max-w-3xl mb-16">
              <motion.p
                variants={fadeUp}
                className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4"
              >
                What We Do
              </motion.p>
              <motion.h2
                variants={fadeUp}
                id="services-heading"
                className="text-4xl md:text-5xl font-display font-bold mb-6"
              >
                Software development
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                From MVP to enterprise scale - we design, build, and launch digital products 
                that solve real problems. No buzzwords, just reliable software.
              </motion.p>
            </div>

            {/* Service cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    custom={i}
                    className="group p-8 rounded-xl bg-card border border-border hover:border-foreground/20 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-display font-bold mb-3">{s.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 4. WHY BYTEXIS ──────────────────────────────────── */}
      <section className="py-28 bg-card border-y border-border/50" aria-labelledby="why-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
          >
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: Content */}
              <div>
                <motion.p
                  variants={fadeUp}
                  className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4"
                >
                  Why Bytexis
                </motion.p>
                <motion.h2
                  variants={fadeUp}
                  id="why-heading"
                  className="text-4xl md:text-5xl font-display font-bold mb-6"
                >
                  Built different, on purpose
                </motion.h2>
                <motion.p
                  variants={fadeUp}
                  className="text-lg text-muted-foreground leading-relaxed mb-10"
                >
                  We're not just an agency. We're a focused team that cares about 
                  code quality, client relationships, and building software that actually works.
                </motion.p>

                <div className="space-y-6">
                  {differentiators.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={i}
                        variants={fadeUp}
                        custom={i}
                        className="flex gap-4"
                      >
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{item.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Right: Visual element */}
              <motion.div
                variants={scaleIn}
                className="relative"
              >
                <div className="aspect-square rounded-2xl border border-border bg-card p-8 lg:p-12 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto rounded-xl bg-secondary flex items-center justify-center mb-6">
                      <Code2 className="w-8 h-8" />
                    </div>
                    <p className="text-2xl font-display font-bold mb-2">Quality First</p>
                    <p className="text-muted-foreground">
                      Every line of code is written with intention
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 3. SELECTED WORK ─────────────────────────────────── */}
      <section className="py-24" aria-labelledby="work-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
          >
            {/* Section header */}
            <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
              <div className="max-w-2xl">
                <motion.p
                  variants={fadeUp}
                  className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4"
                >
                  Our Work
                </motion.p>
                <motion.h2
                  variants={fadeUp}
                  id="work-heading"
                  className="text-3xl md:text-4xl font-display font-bold"
                >
                  Recent projects
                </motion.h2>
              </div>
              <motion.div variants={fadeUp}>
                <Link href="/work">
                  <Button variant="outline" className="gap-2">
                    View all projects
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Project grid - 3 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {featuredProjects.map((project, i) => (
                <motion.div key={project.id} variants={fadeUp} custom={i}>
                  <Link href={`/work/${project.id}`}>
                    <article className="group h-full rounded-lg bg-card border border-border hover:border-foreground/20 transition-colors cursor-pointer overflow-hidden">
                      {/* Image */}
                      <div className="aspect-[16/9] w-full overflow-hidden bg-muted">
                        <img
                          src={project.imageUrl}
                          alt={`${project.title} - ${project.industry} project by Bytexis | ${project.services.join(', ')}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                      
                      {/* Content */}
                      <div className="p-4">
                        <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                          {project.industry}
                        </span>
                        <h3 className="text-base font-display font-bold mt-1 mb-1">
                          {project.title}
                        </h3>
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {project.description}
                        </p>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 4. CTA ─────────────────────────────────────────── */}
      <section className="py-24 border-t border-border" aria-labelledby="cta-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center"
          >
            <motion.h2
              variants={fadeUp}
              id="cta-heading"
              className="text-3xl md:text-4xl font-display font-bold mb-6"
            >
              Ready to build something great?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8"
            >
              Let's talk about your project. No pressure, just a straightforward 
              conversation about what you need and how we can help.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/contact">
                <Button size="lg" className="h-12 px-8 gap-2">
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
    </>
  );
}
