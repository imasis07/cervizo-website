import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo + Coming Soon */}
          <div className="flex items-center gap-6">
            <a href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-hero">
                <span className="text-lg font-bold text-primary-foreground">C</span>
              </div>
              <span className="text-xl font-bold text-foreground">Cervizo</span>
            </a>

            {/* Coming Soon - Desktop */}
            <div
              className="hidden md:flex items-center rounded-lg border border-primary/60 px-3 py-1.5
                         text-sm font-medium text-primary tracking-wide
                         shadow-[0_0_12px_rgba(56,189,248,0.35)]"
            >
              Coming Soon
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Services
            </a>
            <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              How it Works
            </a>
            <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              About Us
            </a>
          </nav>

          {/* Desktop Login Soon */}
          <div className="hidden md:flex">
            <Button variant="outline" size="sm">
              Login Soon
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="rounded-lg p-2 text-foreground hover:bg-secondary md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-t border-border py-4 md:hidden">
            <nav className="flex flex-col gap-3">
              
              {/* Coming Soon - Mobile */}
              <div
                className="rounded-lg border border-primary/60 px-3 py-2
                           text-sm font-medium text-primary text-center tracking-wide
                           shadow-[0_0_10px_rgba(56,189,248,0.3)]"
              >
                Coming Soon
              </div>

              <a href="#services" className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground">
                Services
              </a>
              <a href="#how-it-works" className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground">
                How it Works
              </a>
              <a href="#about" className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground">
                About Us
              </a>

              {/* Mobile Login Soon */}
              <Button variant="outline" className="mt-2">
                Login Soon
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
