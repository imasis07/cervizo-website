import { TrendingUp, Users, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const GrowBusiness = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-14 md:grid-cols-2">

          {/* LEFT CONTENT */}
          <div>
            <span className="mb-4 inline-flex items-center rounded-full bg-orange-100 px-4 py-1.5 text-sm font-semibold text-orange-600">
              Partner With Us
            </span>

            <h2 className="mb-6 text-4xl font-extrabold leading-tight text-foreground md:text-5xl">
              Grow Your Business With{" "}
              <span className="text-primary">Cervizo</span>
            </h2>

            <p className="mb-8 max-w-xl text-lg text-muted-foreground">
              Are you a skilled professional? Join our network of trusted
              service providers and take your business to the next level.
              We bring customers to you!
            </p>

            {/* Button (same vibe as before) */}
            <Button size="lg" className="gap-2">
              Become a Partner
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          {/* RIGHT FEATURE CARDS */}
          <div className="space-y-6">
            {/* Card 1 */}
            <div className="flex items-start gap-4 rounded-2xl bg-card p-6 shadow-card">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="mb-1 text-lg font-semibold text-foreground">
                  Grow Your Business
                </h3>
                <p className="text-muted-foreground">
                  Get access to thousands of potential customers in your area
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-start gap-4 rounded-2xl bg-card p-6 shadow-card">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="mb-1 text-lg font-semibold text-foreground">
                  Regular Work
                </h3>
                <p className="text-muted-foreground">
                  Consistent job opportunities to keep your schedule full
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex items-start gap-4 rounded-2xl bg-card p-6 shadow-card">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="mb-1 text-lg font-semibold text-foreground">
                  Secure Payments
                </h3>
                <p className="text-muted-foreground">
                  Guaranteed on-time payments directly to your account
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GrowBusiness;
