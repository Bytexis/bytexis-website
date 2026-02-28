import { useEffect } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useCreateContact, type ContactFormData } from "@/hooks/use-contact";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle2, Mail, Linkedin, MapPin } from "lucide-react";

export default function Contact() {
  const createContact = useCreateContact();

  const form = useForm<ContactFormData>({
    defaultValues: {
      name: "",
      email: "",
      company: "",
      projectType: "Web Application",
      budget: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    await createContact.mutateAsync(data);
    form.reset();
  };

  const isSuccess = createContact.isSuccess && !form.formState.isDirty;

  /* ContactPage schema for SEO */
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Bytexis",
    "description": "Get in touch with Bytexis for custom software and web development services in Rajkot, Gujarat, India.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Bytexis",
      "email": "hello@bytexis.in",
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
    <div className="min-h-screen">
      <div className="pt-20 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left Column: Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 pt-8"
          >
            <h1 className="text-4xl md:text-6xl font-display font-extrabold tracking-tight leading-tight mb-6">
              Contact Bytexis
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed font-light mb-12">
              Looking for a reliable web or software development partner? Share your project details below, and we’ll respond within 24–48 hours.
            </p>

            <div className="space-y-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-1">Email</h3>
                  <a href="mailto:hello@bytexis.in" className="text-lg font-medium hover:text-primary transition-colors">
                    contact@bytexis.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-1">Location</h3>
                  <p className="text-lg font-medium">Rajkot, Gujarat, India<br /><span className="text-sm font-normal text-muted-foreground">Serving clients globally</span></p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-1">Social</h3>
                  <a href="https://linkedin.com/company/bytexis" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:text-primary transition-colors">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Response expectation */}
            <p className="mt-16 text-sm text-muted-foreground italic">
              * We typically respond to all inquiries within 24–48 hours.
            </p>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="p-8 md:p-10 rounded-[2.5rem] bg-card border border-border shadow-sm">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-16 h-full"
                >
                  <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h2 className="text-3xl font-display font-bold mb-4">Email Client Opened</h2>
                  <p className="text-muted-foreground text-lg mb-8 max-w-md">
                    We've pre-filled your inquiry in your default email client. Just review and hit send!
                  </p>
                  <Button onClick={() => createContact.reset()} variant="outline">
                    Send another message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                      <input
                        id="name"
                        {...form.register("name", { required: "Name is required" })}
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:border-foreground/30 transition-all text-sm"
                        placeholder="Jane Doe"
                      />
                      {form.formState.errors.name && (
                        <p className="text-[11px] text-destructive">{form.formState.errors.name.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                      <input
                        id="email"
                        type="email"
                        {...form.register("email", { required: "Email is required" })}
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:border-foreground/30 transition-all text-sm"
                        placeholder="jane@company.com"
                      />
                      {form.formState.errors.email && (
                        <p className="text-[11px] text-destructive">{form.formState.errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium">Company Name (Optional)</label>
                      <input
                        id="company"
                        {...form.register("company")}
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:border-foreground/30 transition-all text-sm"
                        placeholder="Startup Inc."
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="projectType" className="text-sm font-medium">Project Type</label>
                      <select
                        id="projectType"
                        {...form.register("projectType", { required: "Please select a project type" })}
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:border-foreground/30 transition-all text-sm"
                      >
                        <option value="Web Application">Web Application</option>
                        <option value="Mobile App">Mobile App</option>
                        <option value="SaaS Product">SaaS Product</option>
                        <option value="Custom Software">Custom Software</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="budget" className="text-sm font-medium">Estimated Budget (Optional)</label>
                    <input
                      id="budget"
                      {...form.register("budget")}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:border-foreground/30 transition-all text-sm"
                      placeholder="e.g. $5k - $10k"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Project Details</label>
                    <textarea
                      id="message"
                      rows={4}
                      {...form.register("message", { required: "Please provide some project details" })}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:border-foreground/30 transition-all text-sm resize-none"
                      placeholder="Tell us about what you're building, your goals, and any specific technical requirements..."
                    />
                    {form.formState.errors.message && (
                      <p className="text-[11px] text-destructive">{form.formState.errors.message.message}</p>
                    )}
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full h-12 text-base rounded-xl gap-2 font-semibold"
                      disabled={createContact.isPending}
                    >
                      {createContact.isPending ? "Opening Email..." : "Start the Conversation"}
                      {!createContact.isPending && <Send className="w-4 h-4" />}
                    </Button>
                    <p className="mt-3 text-center text-[11px] text-muted-foreground">
                      Typically responds within 24–48 hours
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* SEO Text Block */}
        <div className="mt-32 max-w-4xl mx-auto border-t border-border pt-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-6 text-center">
              Start Your Software Development Project
            </h2>
            <p className="text-muted-foreground leading-relaxed text-center">
              Bytexis helps startups and businesses build scalable web applications, SaaS platforms, and custom software solutions. Based in Rajkot, Gujarat, we work with clients across India and globally to deliver reliable technical execution and long-term partnership. Whether you're looking for an MVP or a complex enterprise system, let's talk about how we can help you build your product the right way.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
