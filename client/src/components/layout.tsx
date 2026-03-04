import { Link, useLocation } from "wouter";
import { useTheme } from "@/hooks/use-theme";
import { Moon, Sun, Menu, X, Instagram, Phone, Github, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function Layout({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useTheme();
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const updateTheme = () => setResolvedTheme(mediaQuery.matches ? "dark" : "light");
      updateTheme();
      mediaQuery.addEventListener("change", updateTheme);
      return () => mediaQuery.removeEventListener("change", updateTheme);
    }
    setResolvedTheme(theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => setTheme(resolvedTheme === "dark" ? "light" : "dark");

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/work", label: "Work" },
    { href: "/process", label: "Process" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header */}
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled 
            ? "glass-panel shadow-sm" 
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src={`${import.meta.env.BASE_URL}assets/logo.jpeg`}
              alt="Bytexis Logo"
              className="w-10 h-10 rounded-xl shadow-sm group-hover:shadow-md transition-all duration-300"
            />
            <span className="font-display font-bold text-xl tracking-tight">Bytexis</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  location === link.href 
                    ? "text-foreground bg-secondary" 
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                )}
              >
                {link.label}
              </Link>
            ))}

            <div className="w-px h-6 bg-border mx-2" />

            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-lg bg-secondary/50 hover:bg-secondary text-foreground transition-all duration-200"
              aria-label="Toggle theme"
            >
              {resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </nav>

          <button
            className="md:hidden p-2 text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden pt-24 px-4"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "text-2xl font-display font-semibold py-4 border-b border-border/50",
                    location === link.href ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="py-4 flex items-center justify-between border-b border-border/50">
                <span className="text-xl font-display font-semibold text-muted-foreground">Theme</span>
                <button
                  onClick={toggleTheme}
                  className="p-3 rounded-full bg-secondary text-secondary-foreground"
                >
                  {resolvedTheme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow pt-20">
        {children}
      </main>

      <footer className="border-t border-border">
        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Brand */}
            <div className="lg:col-span-1 space-y-4">
              <Link href="/" className="flex items-center gap-2.5">
                <img
                  src={`${import.meta.env.BASE_URL}assets/logo.jpeg`}
                  alt="Bytexis Logo"
                  className="w-8 h-8 rounded-lg"
                />
                <span className="font-display font-bold text-lg">Bytexis</span>
              </Link>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Software development studio helping startups build scalable web applications.
              </p>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-1">
              <h4 className="font-semibold text-sm mb-4">Links</h4>
              <ul className="space-y-2.5">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About" },
                  { href: "/work", label: "Work" },
                  { href: "/process", label: "Process" },
                  { href: "/contact", label: "Contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="lg:col-span-1">
              <h4 className="font-semibold text-sm mb-4">Services</h4>
              <ul className="space-y-2.5">
                {[
                  "Web Applications",
                  "Custom Software",
                  "SaaS Products",
                  "Mobile Apps",
                ].map((service) => (
                  <li key={service}>
                    <span className="text-sm text-muted-foreground">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-1">
              <h4 className="font-semibold text-sm mb-4">Contact</h4>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href="mailto:contact@bytexis.in"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    contact@bytexis.in
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+919106117060"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    +91 91061 17060
                  </a>
                </li>
              </ul>
              {/* Social Icons */}
              <div className="flex items-center gap-3 mt-4">
                <a
                  href="https://instagram.com/bytexis.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com/company/bytexis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/Bytexis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Bytexis. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
