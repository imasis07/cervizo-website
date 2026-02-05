import { Search, Star, Users, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-16 md:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-primary-foreground blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-primary-foreground blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          
          {/* Badge */}
         <div
  className="mb-6 inline-flex animate-fade-in items-center gap-3 
             rounded-full border border-white/70 px-5 py-2
             text-white"
>
  {/* Left orange dot */}
  <span className="h-2.5 w-2.5 rounded-full bg-orange-500" />

  {/* Text */}
  <span className="text-sm font-semibold tracking-wide">
    Launching Soon
  </span>

  {/* Right AI-style star */}
  <svg
    className="h-4 w-4 text-white"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 2l1.9 5.8L20 10l-6.1 2.2L12 18l-1.9-5.8L4 10l6.1-2.2L12 2z" />
  </svg>
</div>



          {/* Headline */}
          <h1 className="mb-6 animate-fade-in text-4xl font-extrabold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
            Home Services at Your
            <br />
            <span className="relative">
              Fingertips
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
              >
                <path
                  d="M2 10C50 4 150 0 298 6"
                  stroke="hsl(var(--accent))"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mb-8 animate-fade-in text-lg text-primary-foreground/80 md:text-xl">
            Professional home services delivered by verified experts.
            <br className="hidden md:block" />
            From cleaning to repairs — we've got you covered.
          </p>

          {/* Search Bar */}
          <div className="mx-auto mb-8 max-w-2xl animate-fade-in">
            <div className="flex flex-col gap-3 rounded-2xl bg-primary-foreground p-2 shadow-2xl md:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search for services (e.g., AC repair, cleaning)"
                  className="h-12 w-full rounded-xl bg-secondary/50 pl-12 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <Button variant="hero" size="lg" className="h-12">
                Search Services
              </Button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-primary-foreground/90 md:gap-10">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/20">
                <Users className="h-5 w-5" />
              </div>
              <div className="text-left">
                <div className="text-lg font-bold">10K+</div>
                <div className="text-xs opacity-80">Professionals</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/20">
                <Star className="h-5 w-5" />
              </div>
              <div className="text-left">
                <div className="text-lg font-bold">4.8/5</div>
                <div className="text-xs opacity-80">Average Rating</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/20">
                <Shield className="h-5 w-5" />
              </div>
              <div className="text-left">
                <div className="text-lg font-bold">100%</div>
                <div className="text-xs opacity-80">Verified Experts</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
