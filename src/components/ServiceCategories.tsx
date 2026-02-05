import { 
  Sparkles, 
  Wrench, 
  Paintbrush, 
  Zap, 
  Wind, 
  Droplets,
  Scissors,
  Home
} from "lucide-react";

const categories = [
  {
    icon: Sparkles,
    name: "Cleaning",
    description: "Home & office cleaning",
    color: "from-cyan-500 to-teal-500",
  },
  {
    icon: Scissors,
    name: "Salon & Spa",
    description: "Beauty services at home",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Wrench,
    name: "Repairs",
    description: "Appliance & gadget repair",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: Zap,
    name: "Electrician",
    description: "Electrical installations",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Droplets,
    name: "Plumbing",
    description: "Pipe & fixture repairs",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Wind,
    name: "AC Service",
    description: "AC repair & maintenance",
    color: "from-sky-500 to-blue-500",
  },
  {
    icon: Paintbrush,
    name: "Painting",
    description: "Interior & exterior paint",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Home,
    name: "Pest Control",
    description: "Safe pest removal",
    color: "from-emerald-500 to-green-500",
  },
];

const ServiceCategories = () => {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Our Services
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            What are you looking for?
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Browse through our comprehensive range of home services. 
            All services are performed by verified professionals.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:gap-6">
          {categories.map((category, index) => (
            <button
              key={category.name}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 text-left shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-hover"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Icon */}
              <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${category.color} shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                <category.icon className="h-7 w-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="mb-1 text-lg font-semibold text-foreground">
                {category.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {category.description}
              </p>

              {/* Hover Arrow */}
              <div className="absolute bottom-4 right-4 h-8 w-8 rounded-full bg-secondary opacity-0 transition-all duration-300 group-hover:opacity-100">
                <svg className="h-full w-full p-2 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
