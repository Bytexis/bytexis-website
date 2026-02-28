import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Globe,
  Smartphone,
  LayoutDashboard,
  Code2,
  CheckCircle,
  MapPin,
} from "lucide-react";
import { getProjects } from "@/data/projects";

/* ─── Animation helpers ──────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut", delay: i * 0.1 },
  }),
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

/* ─── Data ───────────────────────────────────────────────────── */
const services = [
  {
    icon: Globe,
    title: "Web Application Development",
    desc: "We design and build fast, scalable web applications — from customer-facing products to internal tools. Our stack centres on React, Node.js, and modern cloud infrastructure.",
  },
  {
    icon: Code2,
    title: "Custom Software Development",
    desc: "Off-the-shelf software rarely fits. We build purpose-built software tailored to your workflows, integrated with your existing systems, and written to last.",
  },
  {
    icon: LayoutDashboard,
    title: "SaaS Product Development",
    desc: "We help founders go from idea to live SaaS product — handling architecture, billing, auth, and multi-tenancy so you can focus on growth.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Cross-platform mobile applications built with React Native. One codebase, iOS and Android, production-quality — without the agency markup.",
  },
];

const whyUs = [
  {
    title: "Performance-focused engineering",
    desc: "We measure before we optimize. Every app ships with performance baselines built in — not bolted on.",
  },
  {
    title: "Scalable architecture from day one",
    desc: "Designed to grow. We make decisions today that won't force expensive rewrites at 100× traffic.",
  },
  {
    title: "Clean, maintainable code",
    desc: "No spaghetti. Strong typing, clear conventions, and documented APIs. Your team can take over without us.",
  },
  {
    title: "Transparent communication",
    desc: "Shared project board. Regular async updates. No surprises. You always know exactly where things stand.",
  },
  {
    title: "Long-term technical partnership",
    desc: "We don't disappear after launch. Many clients stay with us for ongoing development, support, and scaling.",
  },
];

const processSteps = [
  {
    n: "01",
    title: "Discovery & Planning",
    desc: "We understand your goals, users, and constraints before writing a line of code. This prevents expensive rework later.",
  },
  {
    n: "02",
    title: "UI/UX Design",
    desc: "High-fidelity prototypes grounded in real user flows. You see and feel the product before development starts.",
  },
  {
    n: "03",
    title: "Development & Testing",
    desc: "Two-week sprints, automated tests, live staging from day one. You're in the loop at every step.",
  },
  {
    n: "04",
    title: "Deployment & Support",
    desc: "Zero-downtime deployment, monitoring setup, and 30 days of post-launch support included on every project.",
  },
];

const featuredProjects = getProjects().slice(0, 3);

/* ─── Component ─────────────────────────────────────────────── */
export default function Home() {
  return (
    <div className="flex flex-col">

      {/* ── 1. HERO ─────────────────────────────────────────── */}
      <section className="relative pt-36 pb-28 md:pt-48 md:pb-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.p
              variants={fadeUp}
              className="text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-6"
            >
              Software Development Company · Rajkot, India
            </motion.p>

            {/* ONE H1 per page */}
            <motion.h1
              variants={fadeUp}
              className="text-5xl sm:text-6xl md:text-7xl font-display font-extrabold leading-[1.08] tracking-[-0.02em]"
            >
              Web &amp; Software Development Company in India
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={1}
              className="mt-8 text-xl md:text-2xl text-muted-foreground leading-relaxed font-light max-w-2xl"
            >
              Bytexis builds scalable web applications, SaaS platforms, and custom
              software solutions for startups and growing businesses.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={2}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto gap-2 group">
                  Start a Project
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/work">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  View Our Work
                </Button>
              </Link>
            </motion.div>

            <motion.p
              variants={fadeUp}
              custom={3}
              className="mt-6 flex items-center gap-1.5 text-sm text-muted-foreground"
            >
              <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
              Based in Rajkot, Gujarat · Serving clients globally
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── 2. WHAT WE ACTUALLY DO ──────────────────────────── */}
      <section className="py-8 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-base md:text-lg text-muted-foreground leading-relaxed border-l-2 border-border pl-5 max-w-2xl"
        >
          We help startups and businesses design, build, and launch web and mobile
          products — from MVP to scale. No buzzwords. Just reliable software built
          by engineers who care about quality.
        </motion.p>
      </section>

      {/* ── 3. SERVICES ─────────────────────────────────────── */}
      <section className="py-24 bg-card border-y border-border/60" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              id="services-heading"
              className="text-3xl md:text-4xl font-display font-bold mb-4"
            >
              Custom Software Development Services
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-lg text-muted-foreground max-w-2xl mb-16 leading-relaxed"
            >
              We help startups and businesses design, develop, and launch
              high-performance web and mobile applications. From MVP development to
              scalable production systems, Bytexis delivers reliable and maintainable
              software.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    custom={i}
                    className="p-8 rounded-2xl bg-background border border-border hover:border-foreground/20 transition-colors duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-5 group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-display font-bold mb-3">{s.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-[0.95rem]">
                      {s.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 4. WHY BYTEXIS ──────────────────────────────────── */}
      <section className="py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="why-heading">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.h2
            variants={fadeUp}
            id="why-heading"
            className="text-3xl md:text-4xl font-display font-bold mb-16"
          >
            Why Businesses Choose Bytexis
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
            {whyUs.map((item, i) => (
              <motion.div key={i} variants={fadeUp} custom={i} className="space-y-2">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-display font-semibold text-lg leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-muted-foreground text-[0.93rem] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── 5. SELECTED WORK ─────────────────────────────────── */}
      <section className="py-24 bg-card border-y border-border/60" aria-labelledby="work-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
              <motion.h2
                variants={fadeUp}
                id="work-heading"
                className="text-3xl md:text-4xl font-display font-bold"
              >
                Recent Software Projects
              </motion.h2>
              <motion.div variants={fadeUp}>
                <Link href="/work">
                  <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-foreground">
                    All projects <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredProjects.map((project, i) => (
                <motion.div key={project.id} variants={fadeUp} custom={i}>
                  <Link href={`/work/${project.id}`}>
                    <div className="group h-full rounded-2xl bg-background border border-border hover:border-foreground/20 transition-colors duration-300 cursor-pointer flex flex-col overflow-hidden">
                      {/* Project Image */}
                      <div className="w-full h-48 overflow-hidden bg-muted flex items-center justify-center">
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      {/* Project Info */}
                      <div className="p-7 flex-1 flex flex-col">
                        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-3">
                          {project.techStack.slice(0, 3).join(" · ")}
                        </p>
                        <h3 className="text-xl font-display font-bold mb-3 group-hover:text-foreground/80 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 flex-1">
                          {project.description}
                        </p>
                        <div className="mt-6 flex items-center gap-1.5 text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                          View case study
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 6. PROCESS ───────────────────────────────────────── */}
      <section className="py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="process-heading">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.h2
            variants={fadeUp}
            id="process-heading"
            className="text-3xl md:text-4xl font-display font-bold mb-16"
          >
            Our Development Process
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <motion.div key={i} variants={fadeUp} custom={i}>
                <p className="text-5xl font-display font-extrabold text-border mb-5 leading-none select-none">
                  {step.n}
                </p>
                <h3 className="font-display font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeUp} className="mt-12">
            <Link href="/process">
              <Button variant="outline" className="gap-2">
                See our full process <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ── 7. LOCAL SEO ─────────────────────────────────────── */}
      <section className="py-20 bg-card border-y border-border/60" aria-labelledby="local-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2
              id="local-heading"
              className="text-2xl md:text-3xl font-display font-bold mb-5"
            >
              Software Development Company in Rajkot, Gujarat
            </h2>
            <p className="text-muted-foreground leading-relaxed text-[1.05rem]">
              Bytexis is a Rajkot-based software development company helping businesses
              across Gujarat and India build scalable digital products. We work with
              startups and enterprises looking for reliable web development and custom
              software solutions. Founded in 2026 — built by engineers focused on
              quality over volume.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 8. FINAL CTA ─────────────────────────────────────── */}
      <section className="py-32 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" aria-labelledby="cta-heading">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.h2
            variants={fadeUp}
            id="cta-heading"
            className="text-4xl md:text-5xl font-display font-extrabold tracking-tight"
          >
            Need a Reliable Development Partner?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto"
          >
            Have a product idea? Let's turn it into production-ready software.
            No fluff — just a straightforward conversation about what you need.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-10">
            <Link href="/contact">
              <Button size="lg" className="gap-2 group">
                Get in Touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

    </div>
  );
}
