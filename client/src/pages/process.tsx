import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
    MessageSquare,
    Search,
    PenTool,
    Code2,
    TestTube,
    Rocket,
    ArrowRight,
    CheckCircle,
} from "lucide-react";

const steps = [
    {
        number: "01",
        icon: MessageSquare,
        title: "Discovery & Requirement Analysis",
        description:
            "We discuss your goals, target users, and technical requirements to define scope and feasibility. Our focus is on understanding the core problem before proposing a technical solution.",
        deliverables: [
            "Requirement summary document",
            "Initial architecture direction",
            "Rough timeline and milestone estimate",
        ],
    },
    {
        number: "02",
        icon: Search,
        title: "Planning & Architecture",
        description:
            "We define the system architecture, database design, and technology stack before writing production code. We prioritize scalability, security, and long-term maintainability from the start.",
        deliverables: [
            "System architecture diagram",
            "Database schema design",
            "Tech stack & infrastructure plan",
        ],
    },
    {
        number: "03",
        icon: PenTool,
        title: "UI/UX Design",
        description:
            "From low-fidelity wireframes to interactive high-fidelity prototypes. Every design decision is backed by user flows and brand requirements, ensuring a functional and intuitive interface.",
        deliverables: [
            "User flow diagrams",
            "High-fidelity interactive prototype",
            "UI design system & style guide",
        ],
    },
    {
        number: "04",
        icon: Code2,
        title: "Development",
        description:
            "Agile iterations with weekly updates. We follow clean code practices, version control (Git), and regular code reviews to ensure the codebase remains robust and easy to scale.",
        deliverables: [
            "Production-ready codebase",
            "Weekly sprint demos",
            "Fully version-controlled development",
        ],
    },
    {
        number: "05",
        icon: TestTube,
        title: "Testing & Optimization",
        description:
            "Rigorous testing including unit tests, integration tests, and performance benchmarks. We fix bugs and optimize for speed and security before moving to production.",
        deliverables: [
            "Comprehensive test report",
            "Performance optimization audit",
            "Security & vulnerability check",
        ],
    },
    {
        number: "06",
        icon: Rocket,
        title: "Deployment & Support",
        description:
            "A controlled deployment process with monitoring and logging setup. We provide post-launch support to ensure a smooth transition and reliable system performance.",
        deliverables: [
            "Production environment setup",
            "Monitoring & error logging",
            "Post-launch technical support",
        ],
    },
];

const fadeInUp = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function Process() {
    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="relative pt-20 pb-16 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={stagger}
                        className="max-w-4xl"
                    >
                        <motion.div
                            variants={fadeInUp}
                            className="inline-block mb-6 px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold uppercase tracking-wider border border-border"
                        >
                            Engineering Methodology
                        </motion.div>
                        <motion.h1
                            variants={fadeInUp}
                            className="text-4xl md:text-6xl font-display font-extrabold tracking-tight leading-[1.1]"
                        >
                            Our Software Development Process
                        </motion.h1>
                        <motion.p
                            variants={fadeInUp}
                            className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl"
                        >
                            At Bytexis, we follow a structured software development process to ensure clarity,
                            scalability, and predictable delivery. From discovery to deployment, every step is
                            designed to reduce risk and build reliable digital products.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Steps */}
            <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative">
                    {/* Vertical connector line animation */}
                    <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="hidden md:block absolute left-[2.45rem] top-8 bottom-8 w-px bg-border origin-top"
                    />

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={stagger}
                        className="space-y-10"
                    >
                        {steps.map((step, i) => {
                            const Icon = step.icon;
                            return (
                                <motion.div
                                    key={step.number}
                                    variants={fadeInUp}
                                    className="relative flex flex-col md:flex-row gap-6 md:gap-12 group"
                                >
                                    {/* Icon bubble */}
                                    <div className="flex-shrink-0 flex items-start gap-4 md:gap-0">
                                        <div className="relative z-10 w-20 h-20 rounded-xl bg-background border border-border group-hover:border-foreground/20 group-hover:bg-secondary/50 transition-all duration-300 flex flex-col items-center justify-center shadow-sm">
                                            <Icon className="w-5 h-5 text-foreground mb-1" />
                                            <span className="text-[10px] font-bold tracking-wider text-muted-foreground">
                                                {step.number}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content card */}
                                    <div className="flex-1 p-8 rounded-2xl bg-card border border-border/60 group-hover:border-foreground/10 group-hover:bg-accent/5 transition-all duration-300">
                                        <h2 className="text-2xl font-display font-bold mb-4">
                                            {step.title}
                                        </h2>
                                        <p className="text-muted-foreground leading-relaxed text-[17px] mb-8">
                                            {step.description}
                                        </p>

                                        <div>
                                            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground/80 mb-4">
                                                Deliverables
                                            </h4>
                                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                                                {step.deliverables.map((d) => (
                                                    <li key={d} className="flex items-start gap-2.5 text-sm">
                                                        <CheckCircle className="w-4 h-4 text-foreground/70 mt-0.5 flex-shrink-0" />
                                                        <span className="text-foreground/80">{d}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* Foundations Section (Replacing fake metrics) */}
            <section className="py-24 bg-card border-y border-border/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={stagger}
                        className="text-center mb-16"
                    >
                        <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-display font-bold">
                            Built on Strong Foundations
                        </motion.h2>
                        <motion.p variants={fadeInUp} className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                            We don't just build features; we build systems. Our engineering approach is rooted
                            in industry-standard practices that ensure your software lasts.
                        </motion.p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Version Control (Git)", desc: "Transparent, audible, and collaborative development flow." },
                            { title: "Scalable Architecture", desc: "Software designed to handle growth without total rewrites." },
                            { title: "Clean & Maintainable Code", desc: "Adherence to DRY/SOLID principles for easier long-term support." },
                            { title: "Transparent Communication", desc: "Weekly updates and shared project visibility from day one." },
                            { title: "Security First Mindset", desc: "Built-in protection for your brand and your users' data." },
                            { title: "Long-term Partnership", desc: "Ongoing engineering support for maintenance and scaling." },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                className="p-6 rounded-xl bg-background border border-border/50"
                            >
                                <h3 className="font-bold mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SEO Section */}
            <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">
                        Why Our Development Process Matters
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                        A structured development process reduces technical debt, improves scalability,
                        and ensures predictable delivery timelines. Bytexis follows best practices
                        in modern web and software development to build systems that are reliable
                        and maintainable. Our engineering-focused startup studio builds scalable
                        software for early-stage products and long-term stability.
                    </p>
                </motion.div>
            </section>

            {/* CTA */}
            <section className="py-24 max-w-4xl mx-auto px-4 text-center">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={stagger}
                >
                    <motion.h2
                        variants={fadeInUp}
                        className="text-3xl md:text-4xl font-display font-bold"
                    >
                        Let's Plan Your Software Project
                    </motion.h2>
                    <motion.p
                        variants={fadeInUp}
                        className="mt-6 text-lg text-muted-foreground"
                    >
                        Ready to build a reliable digital product? Let's discuss your requirements
                        today and plan your development journey with a structured approach.
                    </motion.p>
                    <motion.div
                        variants={fadeInUp}
                        className="mt-10"
                    >
                        <Link href="/contact">
                            <Button size="lg" className="gap-2 group">
                                Start Your Project With Clarity
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </motion.div>
                </motion.div>
            </section>
        </div>
    );
}
