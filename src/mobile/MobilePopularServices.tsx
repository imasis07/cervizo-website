import { Star, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: 1,
    name: "Deep Cleaning",
    rating: 4.9,
    duration: "4-5h",
    price: 1499,
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    name: "AC Repair",
    rating: 4.8,
    duration: "1-2h",
    price: 499,
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    name: "Salon at Home",
    rating: 4.9,
    duration: "1-2h",
    price: 799,
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    name: "Electrician",
    rating: 4.7,
    duration: "30-60m",
    price: 149,
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=300&fit=crop",
  },
  {
    id: 5,
    name: "Pest Control",
    rating: 4.8,
    duration: "2-3h",
    price: 999,
    image: "/images/pest-control.jpg",
  },
  {
    id: 6,
    name: "Plumbing Repair",
    rating: 4.6,
    duration: "1-2h",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&h=300&fit=crop",
  },
];

const MobilePopularServices = () => {
  return (
    <section className="px-4 pt-6 pb-10">
      
      {/* Title */}
      <h2 className="mb-4 text-lg font-bold text-foreground">
        Popular Services
      </h2>

      {/* Horizontal slider */}
      <div className="flex gap-3 overflow-x-auto pb-2">
        {services.map((service) => (
          <div
            key={service.id}
            className="min-w-[140px] overflow-hidden rounded-xl border border-border bg-card"
          >
            {/* Image */}
            <div className="relative h-20 overflow-hidden">
              <img
                src={service.image}
                alt={service.name}
                className="h-full w-full object-cover"
              />

              {/* Price overlay */}
              <div className="absolute bottom-1 right-1 rounded-full bg-background/90 px-2 py-0.5 backdrop-blur">
                <span className="text-[10px] font-bold">
                  ₹{service.price}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-2">
              <h3 className="mb-1 text-xs font-semibold leading-tight">
                {service.name}
              </h3>

              {/* Rating + Time (same line) */}
              <div className="mb-2 flex items-center gap-3 text-[10px]">
                <div className="flex items-center gap-1">
                  <Star className="h-3 w-3 fill-accent text-accent" />
                  <span>{service.rating}</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span>{service.duration}</span>
                </div>
              </div>

              <Button
                size="sm"
                variant="outline"
                className="h-7 w-full text-[10px] cursor-default"
                onClick={(e) => e.preventDefault()}
              >
                Coming Soon
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MobilePopularServices;