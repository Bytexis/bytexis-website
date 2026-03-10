import { Link, useLocation } from "wouter";
import { useTheme } from "@/hooks/use-theme";
import { Moon, Sun, Menu, X, Instagram, Phone, Github, Linkedin, Youtube, Twitter, Facebook } from "lucide-react";
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
      {/* Scroll blur overlay */}
      <div className={cn("scroll-blur-overlay", scrolled && "visible")} />
      
      {/* Header */}
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          "bg-background/70 backdrop-blur-md border-b",
          scrolled 
            ? "border-border/50 shadow-sm" 
            : "border-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src={`${import.meta.env.BASE_URL}assets/Bytexis-logo.png`}
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
                  "px-4 py-2 text-sm transition-all duration-200 border-b-2",
                  location === link.href 
                    ? "text-foreground font-bold border-foreground" 
                    : "text-muted-foreground font-medium border-transparent hover:text-foreground"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
            {/* Brand */}
            <div className="lg:col-span-1 space-y-4">
              <Link href="/" className="flex items-center gap-2.5">
                <img
                  src={`${import.meta.env.BASE_URL}assets/Bytexis-logo.png`}
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
                  { href: "/work", label: "Work" },
                  { href: "/process", label: "Process" },
                  { href: "/about", label: "About" },
                  { href: "/contact", label: "Contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      className={cn(
                        "text-sm transition-colors",
                        location === link.href
                          ? "text-foreground font-semibold"
                          : "text-muted-foreground hover:text-foreground"
                      )}
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
                    href="mailto:bytexis.tech@gmail.com"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    bytexis.tech@gmail.com
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
            </div>

            {/* Connect */}
            <div className="lg:col-span-1">
              <h4 className="font-semibold text-sm mb-4">Connect</h4>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href="https://instagram.com/bytexis.tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>Instagram</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/bytexis-tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a
                    href="http://youtube.com/@BytexisTech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Youtube className="w-4 h-4" />
                    <span>YouTube</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/BytexisTech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                    <span>Twitter</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/share/1BzWh1G19U/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Facebook className="w-4 h-4" />
                    <span>Facebook</span>
                  </a>
                </li>
              </ul>
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
