import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Code2, Zap, Users, Target, Heart, Lightbulb } from "lucide-react";

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

const values = [
  {
    icon: Code2,
    title: "Craftsmanship",
    desc: "We write code that lasts. Clean architecture, readable patterns, and scalable systems not shortcuts that create debt.",
  },
  {
    icon: Zap,
    title: "Velocity",
    desc: "Modern tools and structured workflows help us move fast without breaking things. Speed should be sustainable.",
  },
  {
    icon: Users,
    title: "Partnership",
    desc: "We're not vendors, we're collaborators. Your success is our success. We stay accountable throughout the journey.",
  },
  {
    icon: Target,
    title: "Focus",
    desc: "We take on fewer projects to do them better. Quality over quantity, always. Every client gets our full attention.",
  },
  {
    icon: Heart,
    title: "Honesty",
    desc: "We'll tell you what you need to hear, not what you want to hear. Transparent communication builds trust.",
  },
  {
    icon: Lightbulb,
    title: "Curiosity",
    desc: "Technology evolves fast. We stay curious, keep learning, and bring fresh perspectives to every problem.",
  },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Bytexis</title>
        <meta name="description" content="Meet the Bytexis team - experienced software engineers building custom web applications and SaaS products for startups and businesses in Rajkot, Gujarat." />
        <meta name="keywords" content="software development team, web development company Rajkot, tech startup Gujarat, custom software engineers" />
      </Helmet>
      
      <div className="min-h-screen py-24">
      {/* Hero Section */}
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
              About Us
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl font-display font-extrabold tracking-tight mb-6"
            >
              A software studio built on quality and trust
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Bytexis is a growing software development studio focused on building 
              scalable web applications and custom software solutions. Founded with 
              an engineering-first mindset, we work with startups and small businesses 
              looking for reliable technical execution and long-term partnership.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <div>
                <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">
                  Our Story
                </p>
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">
                  Why we started Bytexis
                </h2>
              </div>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Bytexis was born from a simple frustration - too much software is 
                  built poorly. Rushed timelines, messy codebases, and a lack of 
                  long-term thinking leave businesses with products that break, 
                  don't scale, and cost more to fix than they did to build.
                </p>
                <p>
                  After working on multiple independent projects and collaborating 
                  with early-stage teams, we saw the same pattern repeat. We started 
                  Bytexis to do it differently to bring clean architecture, 
                  maintainable systems, and thoughtful execution to every project.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="space-y-6"
            >
              <div className="p-6 rounded-xl bg-card border border-border">
                <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-3">
                  Where We Are Now
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Bytexis is in its early growth stage. We are actively building our 
                  portfolio and partnering with founders who value technical clarity.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-secondary border border-border">
                <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-3">
                  Location
                </p>
                <p className="font-display font-bold mb-1">Rajkot, Gujarat, India</p>
                <p className="text-sm text-muted-foreground">
                  Serving clients globally.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
          >
            <div className="max-w-2xl mb-12">
              <motion.p
                variants={fadeUp}
                className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4"
              >
                Our Values
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="text-2xl md:text-3xl font-display font-bold mb-4"
              >
                What we believe in
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-muted-foreground"
              >
                These principles guide how we work and how we treat our clients.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, i) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    custom={i}
                    className="p-6 rounded-xl border border-border"
                  >
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-display font-bold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 border-t border-border">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-2xl font-display font-bold mb-4">
            Want to work with us?
          </h2>
          <p className="text-muted-foreground mb-6">
            We're always looking to partner with ambitious founders and teams 
            who care about building quality software.
          </p>
          <Link href="/contact">
            <Button className="gap-2">
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
    </>
  );
}
