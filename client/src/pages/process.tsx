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
    GitBranch,
    Shield,
    Users,
    Zap,
    HeartHandshake,
} from "lucide-react";

const steps = [
    {
        number: "01",
        icon: MessageSquare,
        title: "Discovery",
        description: "We start by understanding your goals, target users, and technical requirements. This phase defines scope and feasibility before any code is written.",
    },
    {
        number: "02",
        icon: Search,
        title: "Planning",
        description: "We define the system architecture, database design, and technology stack. Scalability, security, and maintainability are built in from the start.",
    },
    {
        number: "03",
        icon: PenTool,
        title: "Design",
        description: "From wireframes to interactive prototypes. Every design decision is grounded in user flows and your brand requirements.",
    },
    {
        number: "04",
        icon: Code2,
        title: "Development",
        description: "Agile iterations with weekly updates. We follow clean code practices, version control, and regular code reviews.",
    },
    {
        number: "05",
        icon: TestTube,
        title: "Testing",
        description: "Rigorous testing including unit tests, integration tests, and performance benchmarks. We fix bugs and optimize before production.",
    },
    {
        number: "06",
        icon: Rocket,
        title: "Launch",
        description: "Controlled deployment with monitoring and logging. We provide post-launch support to ensure smooth operation.",
    },
];

const foundations = [
    { icon: GitBranch, title: "Version Control", desc: "Git-based workflow with transparent development history." },
    { icon: Zap, title: "Scalable Architecture", desc: "Built to handle growth without costly rewrites." },
    { icon: Code2, title: "Clean Code", desc: "DRY/SOLID principles for long-term maintainability." },
    { icon: Users, title: "Transparent Process", desc: "Weekly updates and shared project visibility." },
    { icon: Shield, title: "Security First", desc: "Protection for your brand, users, and data." },
    { icon: HeartHandshake, title: "Long-term Partnership", desc: "Ongoing support, maintenance, and growth." },
];

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 },
    }),
};

const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

export default function Process() {
    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="pt-28 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={stagger}
                        className="max-w-3xl"
                    >
                        <motion.p
                            variants={fadeUp}
                            className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4"
                        >
                            How We Work
                        </motion.p>
                        <motion.h1
                            variants={fadeUp}
                            className="text-4xl sm:text-5xl font-display font-extrabold tracking-tight mb-6"
                        >
                            A clear process for reliable results
                        </motion.h1>
                        <motion.p
                            variants={fadeUp}
                            className="text-lg text-muted-foreground leading-relaxed"
                        >
                            No black boxes. From discovery to deployment, every step is designed 
                            to reduce risk and build reliable software you can depend on.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Steps - Timeline Style */}
            <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={stagger}
                    className="max-w-3xl"
                >
                    {steps.map((step, i) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={step.number}
                                variants={fadeUp}
                                custom={i}
                                className="relative pl-16 pb-12 last:pb-0"
                            >
                                {/* Timeline line */}
                                {i !== steps.length - 1 && (
                                    <div className="absolute left-[18px] top-12 w-px h-[calc(100%-24px)] bg-border" />
                                )}
                                
                                {/* Number circle */}
                                <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center text-sm font-bold">
                                    {step.number}
                                </div>
                                
                                {/* Content */}
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <Icon className="w-4 h-4 text-muted-foreground" />
                                        <h2 className="text-xl font-display font-bold">
                                            {step.title}
                                        </h2>
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </section>

            {/* Foundations Section - Larger */}
            <section className="py-24 bg-secondary/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={stagger}
                    >
                        <div className="text-center mb-16">
                            <motion.p
                                variants={fadeUp}
                                className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4"
                            >
                                Engineering Principles
                            </motion.p>
                            <motion.h2
                                variants={fadeUp}
                                className="text-3xl md:text-4xl font-display font-bold mb-4"
                            >
                                Built on strong foundations
                            </motion.h2>
                            <motion.p
                                variants={fadeUp}
                                className="text-lg text-muted-foreground max-w-2xl mx-auto"
                            >
                                We don't just build features; we build systems that last.
                            </motion.p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
                            {foundations.map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <motion.div
                                        key={i}
                                        variants={fadeUp}
                                        custom={i}
                                        className="flex gap-4"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center flex-shrink-0">
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                                            <p className="text-muted-foreground">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Simple CTA */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-display font-bold mb-4">
                        Ready to start your project?
                    </h2>
                    <p className="text-muted-foreground mb-8">
                        Let's discuss your requirements and plan your development journey.
                    </p>
                    <Link href="/contact">
                        <Button size="lg" className="gap-2">
                            Get in Touch
                            <ArrowRight className="w-4 h-4" />
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
