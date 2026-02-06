import { Search, Star, Users, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const MobileHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero pt-24 pb-10">

      {/* 🎨 Holi color animation */}
      <img
        src="/gifs/holi-colors.gif"
        alt="holi colors"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-45 mix-blend-screen"
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative px-4 text-center">

        {/* Holi badge */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur">
          🌸 Holi Special Services
        </div>

        {/* Headline */}
        <h1 className="mb-6 text-2xl font-extrabold leading-snug text-primary-foreground">
          Home Services at Your <br />
          Fingertips
        </h1>

        {/* Search */}
        <div className="mx-auto mb-8 max-w-md">
          <div className="flex items-center gap-2 rounded-2xl bg-primary-foreground p-2 shadow-xl">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search for services"
                className="h-10 w-full rounded-xl bg-secondary/50 pl-9 pr-3 text-sm
                           text-foreground placeholder:text-muted-foreground
                           focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <Button size="sm" className="h-10 px-4">
              Search
            </Button>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="flex justify-center gap-4 text-primary-foreground/90">
          {[
            { icon: Users, label: "10K+", sub: "Pros" },
            { icon: Star, label: "4.8/5", sub: "Rating" },
            { icon: Shield, label: "100%", sub: "Verified" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/20">
                <item.icon className="h-4 w-4" />
              </div>
              <div className="text-left">
                <div className="text-sm font-bold">{item.label}</div>
                <div className="text-[11px] opacity-80">{item.sub}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MobileHero;
