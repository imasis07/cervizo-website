import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-8 md:p-12 lg:p-16">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-primary-foreground blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-primary-foreground blur-3xl" />
          </div>

          <div className="relative z-10 flex flex-col items-center gap-8 text-center lg:flex-row lg:text-left">
            {/* Content */}
            <div className="flex-1">
              <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
                Ready to Experience
                <br />
                Premium Home Services?
              </h2>
              <p className="max-w-xl text-lg text-primary-foreground/80">
                Download our app or book directly from the website. 
                Your home deserves the best care.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button variant="hero" size="xl" className="group">
                Book a Service
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="heroOutline" size="xl" className="group">
                <Download className="mr-2 h-5 w-5" />
                Download App
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
