import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto max-w-6xl px-4 flex items-center justify-between h-16">
        <a href="#" className="font-handwritten text-2xl font-bold text-primary">
          AH<span className="text-secondary">.</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium">
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-primary p-2">
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setMobileOpen(false)} className="block py-3 text-muted-foreground hover:text-primary transition-colors font-medium border-b border-border/30 last:border-0">
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
