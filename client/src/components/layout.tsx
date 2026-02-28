import { Link, useLocation } from "wouter";
import { useTheme } from "@/hooks/use-theme";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function Layout({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useTheme();
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");

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

  const toggleTheme = () => setTheme(resolvedTheme === "dark" ? "light" : "dark");

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/work", label: "Work" },
    { href: "/process", label: "Process" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
      <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b-0 border-t-0 border-x-0 border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src={`${import.meta.env.BASE_URL}assets/logo.jpeg`}
              alt="Bytexis Logo"
              className="w-10 h-10 rounded-lg shadow-sm group-hover:scale-105 transition-transform duration-300"
            />
            <span className="font-display font-bold text-xl tracking-tight">Bytexis</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative py-2",
                  location === link.href ? "text-primary" : "text-muted-foreground"
                )}
              >
                {link.label}
                {location === link.href && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}

            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-secondary/50 hover:bg-secondary text-secondary-foreground transition-colors"
              aria-label="Toggle theme"
            >
              {resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </nav>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
                    location === link.href ? "text-primary" : "text-muted-foreground"
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

      <footer className="border-t border-border/50 bg-card py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 pb-12 border-b border-border/50">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-display font-bold">BYTEXIS.</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Software Development Company in Rajkot, India
              </p>
            </div>

            {/* Navigation */}
            <div className="space-y-4">
              <h4 className="font-display font-semibold text-foreground">Navigation</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/work" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div className="space-y-4">
              <h4 className="font-display font-semibold text-foreground">Connect</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                  >
                    <span>GitHub</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                  >
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                  >
                    <span>Instagram</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="font-display font-semibold text-foreground">Contact</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:hello@bytexis.com"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                  >
                    <span>Email</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+919876543210"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                  >
                    <span>Call</span>
                  </a>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                  >
                    <span>Get in Touch</span>
                  </Link>
                </li>
                <li>
                  <span className="text-sm text-muted-foreground flex items-center gap-2">
                    Rajkot, Gujarat, India
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Bytexis. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
