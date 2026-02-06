import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const MobileCTASection = () => {
  return (
    <section className="px-4 pb-10">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-hero p-6">
        
        {/* Soft glow */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute -top-16 -left-16 h-40 w-40 rounded-full bg-primary-foreground blur-3xl" />
          <div className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-primary-foreground blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center">
          <h2 className="mb-3 text-xl font-bold text-primary-foreground">
            Ready to experience <br /> premium home services?
          </h2>

          <p className="mb-5 text-sm text-primary-foreground/80">
            Book instantly or download the app for the best experience.
          </p>

          {/* Buttons */}
          <div className="flex flex-col gap-3">
            <Button className="w-full">
              Book a Service
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button variant="outline" className="w-full bg-white/90">
              <Download className="mr-2 h-4 w-4" />
              Download App
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileCTASection;
