import {
  Sparkles,
  Wrench,
  Paintbrush,
  Zap,
  Wind,
  Droplets,
  Scissors,
  Home,
} from "lucide-react";

const categories = [
  { name: "Cleaning", image: "/images/categories/cleaning.png" },
  { name: "Salon & Spa", image: "/images/categories/salon.png" },
  { name: "Repairs", image: "/images/categories/repair.png" },
  { name: "Electrician", image: "/images/categories/electrician.png" },
  { name: "Plumbing", image: "/images/categories/plumbing.png" },
  { name: "AC Service", image: "/images/categories/ac.png" },
  { name: "Painting", image: "/images/categories/painting.png" },
  { name: "Pest Control", image: "/images/categories/pest.png" },
];

const MobileServiceCategories = () => {
  return (
    <section className="px-4 pt-6 pb-8">
      
      <h2 className="mb-4 text-lg font-bold text-foreground">
        What are you looking for?
      </h2>

      <div className="grid grid-cols-3 gap-4">
        {categories.map((category) => (
          <button
            key={category.name}
            className="flex flex-col items-center rounded-xl border border-border bg-card p-3"
          >
            <div className="mb-2 flex h-24 w-24 items-center justify-center">
              <img
                src={category.image}
                alt={category.name}
                className="h-full w-full object-contain"
              />
            </div>

            <span className="text-center text-xs font-medium text-foreground">
              {category.name}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default MobileServiceCategories;
