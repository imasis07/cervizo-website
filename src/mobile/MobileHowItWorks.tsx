import { Search, UserCheck, Star } from "lucide-react";

const MobileHowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-secondary/30 py-10">
      <div className="px-4">

        {/* Section Header */}
        <div className="mb-8 text-center">
          <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            Simple Process
          </span>
          <h2 className="text-xl font-bold text-foreground">
            How Cervizo Works
          </h2>
        </div>

        {/* Steps with connecting line */}
        <div className="relative">

          {/* Connection Line */}
          <div className="absolute left-6 right-6 top-10 h-0.5 bg-primary/20" />

          <div className="grid grid-cols-3 gap-4 text-center relative">

            {/* STEP 1 */}
            <div className="relative z-10">
              <div className="relative mx-auto mb-2 flex h-20 w-20 items-center justify-center rounded-2xl bg-card shadow-card">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-hero">
                  <Search className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>
              <h3 className="text-xs font-bold">Book Service</h3>
            </div>

            {/* STEP 2 */}
            <div className="relative z-10">
              <div className="relative mx-auto mb-2 flex h-20 w-20 items-center justify-center rounded-2xl bg-card shadow-card">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-hero">
                  <UserCheck className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>
              <h3 className="text-xs font-bold">Get a Professional</h3>
            </div>

            {/* STEP 3 */}
            <div className="relative z-10">
              <div className="relative mx-auto mb-2 flex h-20 w-20 items-center justify-center rounded-2xl bg-card shadow-card">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-hero">
                  <Star className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>
              <h3 className="text-xs font-bold">Relax & Rate</h3>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default MobileHowItWorks;
