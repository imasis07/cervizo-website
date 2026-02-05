import { Search, Calendar, UserCheck, Star } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Choose Your Service",
    description: "Browse our services and select what you need. We offer everything from cleaning to repairs.",
  },
  {
    icon: Calendar,
    step: "02",
    title: "Book a Slot",
    description: "Pick a convenient date and time. We're available 7 days a week for your convenience.",
  },
  {
    icon: UserCheck,
    step: "03",
    title: "Get it Done",
    description: "Our verified professional arrives at your doorstep and completes the service perfectly.",
  },
  {
    icon: Star,
    step: "04",
    title: "Rate & Review",
    description: "Share your experience and help us maintain our high-quality service standards.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-secondary/30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Simple Process
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            How Cervizo Works
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Getting professional home services has never been easier. 
            Follow these simple steps to get started.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="absolute left-0 right-0 top-16 hidden h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent lg:block" />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((item, index) => (
              <div
                key={item.step}
                className="group relative text-center"
              >
                {/* Step Number */}
                <div className="relative mx-auto mb-6">
                  <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-3xl bg-card shadow-card transition-all duration-300 group-hover:shadow-hover">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-hero transition-transform duration-300 group-hover:scale-110">
                      <item.icon className="h-10 w-10 text-primary-foreground" />
                    </div>
                  </div>
                  {/* Step Badge */}
                  <div className="absolute -right-2 -top-2 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-accent text-sm font-bold text-accent-foreground shadow-lg">
                    {item.step}
                  </div>
                </div>

                {/* Content */}
                <h3 className="mb-2 text-xl font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>

                {/* Arrow - Mobile/Tablet */}
                {index < steps.length - 1 && (
                  <div className="my-4 flex justify-center lg:hidden">
                    <svg className="h-8 w-8 text-primary/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
