import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl font-display font-extrabold tracking-tight leading-tight">
            About Bytexis – <span className="text-gradient">Software Development Studio in India</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground leading-relaxed">
            Bytexis is a growing software development studio focused on building scalable web applications and custom software solutions. Founded with an engineering-first mindset, we work with startups and small businesses looking for reliable technical execution and long-term partnership.
          </p>
        </motion.div>
      </section>

      {/* Main Content / Story Section */}
      <section className="py-20 bg-card border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-7 space-y-8"
            >
              <h2 className="text-3xl font-display font-bold">Why We Started</h2>
              <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                <p>
                  Bytexis was started with a simple goal — to build software the right way. After working on multiple independent projects and collaborating with early-stage teams, we noticed a common issue: rushed development, messy codebases, and a lack of long-term technical thinking.
                </p>
                <p>
                  We built Bytexis to focus on clean architecture, maintainable systems, and thoughtful execution — even at the earliest stages of a product. We believe that quality engineering shouldn't be reserved for enterprise giants; it should be the foundation of every startup.
                </p>
              </div>

              {/* Where we are now - Building trust through honesty */}
              <div className="pt-8 space-y-4">
                <h3 className="text-xl font-display font-bold">Where We Are Now</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Bytexis is in its early growth stage. We are actively building our portfolio, refining our development systems, and partnering with founders who value technical clarity and quality execution. Based in Rajkot, Gujarat, we are building a world-class engineering culture right here in India.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-1"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-4 p-8 rounded-3xl bg-background border border-border/50 shadow-sm"
            >
              <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-6 text-center">Location & Contact</h3>
              <div className="space-y-4 text-center">
                <p className="text-lg font-medium">Rajkot, Gujarat, India</p>
                <p className="text-muted-foreground">Serving clients globally from our base in Gujarat.</p>
                <div className="pt-4">
                  <Link href="/contact">
                    <Button className="w-full">Get in Touch</Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold">Our Engineering Values</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Craftsmanship",
              desc: "We prioritize clean architecture, readable code, and scalable systems over shortcuts. Quality engineering compounds over time and reduces technical debt."
            },
            {
              title: "Velocity",
              desc: "We use modern tools and structured workflows to move fast — without creating technical debt that slows future growth. Speed should be sustainable."
            },
            {
              title: "Partnership",
              desc: "We collaborate closely with founders, communicate transparently, and stay accountable throughout the product lifecycle. We are technical partners, not just contractors."
            }
          ].map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-card border border-border/50 hover:border-foreground/10 transition-colors shadow-sm"
            >
              <h3 className="text-2xl font-bold font-display mb-4">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
