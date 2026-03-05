import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle2, Mail, Linkedin, MapPin, Phone, Instagram, Github } from "lucide-react";

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

export default function Contact() {
  const [state, handleSubmit] = useForm("xjgenjpa");
  const [formKey, setFormKey] = useState(0);

  /* ContactPage schema for SEO */
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Bytexis",
    "description": "Get in touch with Bytexis for custom software and web development services in Rajkot, Gujarat, India.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Bytexis",
      "email": "contact@bytexis.in",
      "url": "https://bytexis.in",
      "location": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Rajkot",
          "addressRegion": "Gujarat",
          "addressCountry": "IN"
        }
      }
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(contactPageSchema);
    script.id = "contact-schema";
    if (!document.getElementById("contact-schema")) document.head.appendChild(script);
    return () => { document.getElementById("contact-schema")?.remove(); };
  }, []);

  return (
    <>
      <Helmet>
        <title>Contact Us | Get in Touch with Bytexis | Rajkot, Gujarat</title>
        <meta name="description" content="Contact Bytexis for custom software and web development services. Located in Rajkot, Gujarat. Call +91 91061 17060 or email contact@bytexis.in" />
        <meta name="keywords" content="contact software company, web development inquiry, custom software consultation, Rajkot software services" />
      </Helmet>
      
      <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-28 pb-8">
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
              Get in Touch
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl font-display font-extrabold tracking-tight mb-6"
            >
              Let's build something great together
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Have a project in mind? Share the details below and we'll get back 
              to you within 24-48 hours to discuss how we can help.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <div className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">

          {/* Left Column: Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="space-y-4 flex-1 flex flex-col">
              {/* Contact cards */}
              <div className="p-5 rounded-xl border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a 
                      href="mailto:contact@bytexis.in" 
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      contact@bytexis.in
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a 
                      href="tel:+919106117060" 
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors block"
                    >
                      +91 91061 17060
                    </a>
                    <a 
                      href="tel:+916356165015" 
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors block"
                    >
                      +91 63561 65015
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-sm text-muted-foreground">
                      Rajkot, Gujarat, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="p-5 rounded-xl border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Instagram</h3>
                    <a 
                      href="https://instagram.com/bytexis.tech" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      @bytexis.tech
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">LinkedIn</h3>
                    <a 
                      href="https://linkedin.com/in/bytexis-tech" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      bytexis-tech
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl border border-border flex-1">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">GitHub</h3>
                    <a 
                      href="https://github.com/Bytexis" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Bytexis
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="p-6 md:p-8 rounded-xl border border-border">
              {state.succeeded ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h2 className="text-xl font-display font-bold mb-3">Message Sent!</h2>
                  <p className="text-muted-foreground mb-6 max-w-md text-sm">
                    Thank you for reaching out. We'll get back to you within 24-48 hours.
                  </p>
                  <Button onClick={() => setFormKey(prev => prev + 1)} variant="outline" size="sm">
                    Send another message
                  </Button>
                </motion.div>
              ) : (
                <form key={formKey} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name <span className="text-destructive">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3.5 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        placeholder="Your name"
                      />
                      <ValidationError prefix="Name" field="name" errors={state.errors} className="text-xs text-destructive" />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address <span className="text-destructive">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-3.5 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        placeholder="you@company.com"
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-destructive" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Contact Number <span className="text-destructive">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        className="w-full px-4 py-3.5 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        placeholder="+91 12345 67890"
                      />
                      <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-xs text-destructive" />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="projectType" className="text-sm font-medium">
                        Project Type <span className="text-destructive">*</span>
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        className="w-full px-4 py-3.5 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      >
                        <option value="Web Application">Web Application</option>
                        <option value="Mobile App">Mobile App</option>
                        <option value="SaaS Product">SaaS Product</option>
                        <option value="Custom Software">Custom Software</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Project Details <span className="text-destructive">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-destructive" />
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full h-14 text-base gap-2 font-semibold"
                      disabled={state.submitting}
                    >
                      {state.submitting ? "Sending..." : "Send Message"}
                      {!state.submitting && <Send className="w-4 h-4" />}
                    </Button>
                    <p className="mt-4 text-center text-sm text-muted-foreground">
                      We'll respond within 24-48 hours
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
    </>
  );
}
