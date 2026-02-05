import { Star, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: 1,
    name: "Deep Home Cleaning",
    category: "Cleaning",
    rating: 4.9,
    reviews: 2847,
    price: 1499,
    duration: "4-5 hours",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop",
    popular: true,
  },
  {
    id: 2,
    name: "AC Service & Repair",
    category: "AC Service",
    rating: 4.8,
    reviews: 1923,
    price: 499,
    duration: "1-2 hours",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop",
    popular: true,
  },
  {
    id: 3,
    name: "Salon at Home",
    category: "Salon & Spa",
    rating: 4.9,
    reviews: 3421,
    price: 799,
    duration: "1-2 hours",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=300&fit=crop",
    popular: false,
  },
  {
    id: 4,
    name: "Electrician Services",
    category: "Electrician",
    rating: 4.7,
    reviews: 1567,
    price: 149,
    duration: "30-60 mins",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=300&fit=crop",
    popular: false,
  },
  {
    id: 5,
    name: "Pest Control",
    category: "Pest Control",
    rating: 4.8,
    reviews: 892,
    price: 999,
    duration: "2-3 hours",
    image: "/images/pest-control.jpg",
    popular: false,
  },
  {
    id: 6,
    name: "Plumbing Repair",
    category: "Plumbing",
    rating: 4.6,
    reviews: 1234,
    price: 199,
    duration: "1-2 hours",
    image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&h=300&fit=crop",
    popular: false,
  },
];

const PopularServices = () => {

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
              Top Rated
            </span>
            <h2 className="mb-2 text-3xl font-bold text-foreground md:text-4xl">
              Popular Services
            </h2>
            <p className="max-w-xl text-muted-foreground">
              Most loved services by our customers. Book with confidence.
            </p>
          </div>
          <Button variant="outline" className="group">
            View All Services
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-hover"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {service.popular && (
                  <div className="absolute left-3 top-3 rounded-full bg-gradient-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                    Popular
                  </div>
                )}
                <div className="absolute bottom-3 right-3 rounded-full bg-background/90 px-3 py-1 backdrop-blur-sm">
                  <span className="text-sm font-bold text-foreground">₹{service.price}</span>
                  <span className="text-xs text-muted-foreground"> onwards</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="mb-2 text-xs font-medium uppercase tracking-wider text-primary">
                  {service.category}
                </div>
                <h3 className="mb-3 text-lg font-bold text-foreground">
                  {service.name}
                </h3>
                
                <div className="mb-4 flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="font-semibold text-foreground">{service.rating}</span>
                    <span className="text-muted-foreground">({service.reviews.toLocaleString()})</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{service.duration}</span>
                  </div>
                </div>

 <Button
  className="w-full cursor-default"
  variant="outline"
  onClick={(e) => e.preventDefault()}
>
  Coming Soon
</Button>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularServices;
